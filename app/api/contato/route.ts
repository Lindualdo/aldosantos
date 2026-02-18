import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey?.trim()) {
      console.error('RESEND_API_KEY não configurada')
      return NextResponse.json(
        { error: 'E-mail não configurado. Adicione RESEND_API_KEY nas variáveis de ambiente.' },
        { status: 503 }
      )
    }

    const body = await request.json()
    const { nome, email, telefone, mensagem } = body

    if (!nome?.trim() || !email?.trim() || !mensagem?.trim()) {
      return NextResponse.json(
        { error: 'Nome, email e mensagem são obrigatórios.' },
        { status: 400 }
      )
    }

    const { Resend } = await import('resend')
    const resend = new Resend(apiKey)
    const TO_EMAIL = process.env.CONTACT_EMAIL || 'contato@aldosantos.com'
    const FROM_EMAIL = process.env.FROM_EMAIL || 'Contato Site <onboarding@resend.dev>'
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
      const msg = typeof error === 'object' && error !== null && 'message' in error
        ? String((error as { message?: string }).message)
        : 'Erro ao enviar e-mail.'
      return NextResponse.json({ error: msg }, { status: 500 })
    }

    return NextResponse.json({ success: true, id: data?.id })
  } catch (err) {
    console.error('API contato error:', err)
    const message = err instanceof Error ? err.message : 'Erro inesperado.'
    return NextResponse.json(
      { error: `Erro ao enviar mensagem: ${message}` },
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
