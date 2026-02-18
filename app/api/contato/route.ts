import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const TO_EMAIL = process.env.CONTACT_EMAIL || 'contato@aldosantos.com'
const FROM_EMAIL = process.env.FROM_EMAIL || 'Contato Site <onboarding@resend.dev>'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { nome, email, telefone, mensagem } = body

    if (!nome?.trim() || !email?.trim() || !mensagem?.trim()) {
      return NextResponse.json(
        { error: 'Nome, email e mensagem são obrigatórios.' },
        { status: 400 }
      )
    }

    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY não configurada')
      return NextResponse.json(
        { error: 'Serviço de e-mail não configurado.' },
        { status: 503 }
      )
    }

    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: email,
      subject: `[Site] Contato de ${nome}`,
      html: `
        <h2>Novo contato pelo site</h2>
        <p><strong>Nome:</strong> ${escapeHtml(nome)}</p>
        <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
        <p><strong>Telefone:</strong> ${telefone ? escapeHtml(telefone) : '—'}</p>
        <p><strong>Mensagem:</strong></p>
        <pre style="white-space: pre-wrap; font-family: inherit;">${escapeHtml(mensagem)}</pre>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, id: data?.id })
  } catch (err) {
    console.error('API contato error:', err)
    return NextResponse.json(
      { error: 'Erro ao enviar mensagem. Tente novamente.' },
      { status: 500 }
    )
  }
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  }
  return String(text).replace(/[&<>"']/g, (c) => map[c] ?? c)
}
