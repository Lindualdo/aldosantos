'use client'

import { useState } from 'react'

export default function Contato() {
  const [formState, setFormState] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  })
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [submitError, setSubmitError] = useState<string>('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitStatus('loading')
    setSubmitError('')
    try {
      const res = await fetch('/api/contato', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        setSubmitError(typeof data?.error === 'string' ? data.error : 'Erro ao enviar mensagem. Tente novamente ou entre em contato por WhatsApp.')
        setSubmitStatus('error')
        return
      }
      setSubmitStatus('success')
      setFormState({ nome: '', email: '', telefone: '', mensagem: '' })
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } catch {
      setSubmitError('Erro de conexão. Verifique sua internet e tente novamente.')
      setSubmitStatus('error')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-slate-900 border-b border-slate-800 py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-blue-500 font-semibold tracking-widest text-sm uppercase mb-4 flex items-center gap-4">
              <span className="w-8 h-[2px] bg-blue-500"></span>
              Contato Direto
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              Vamos conversar sobre o P&L da sua operação.
            </h1>
            <p className="text-lg md:text-xl text-slate-400 font-light max-w-2xl">
              Deixe uma mensagem ou me chame no WhatsApp para agendarmos o diagnóstico inicial da sua operação.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 md:p-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-8 tracking-tight">Envie uma Mensagem</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="nome" className="block text-sm font-semibold text-slate-900 mb-2">
                        Nome Completo
                      </label>
                      <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={formState.nome}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                        placeholder="Ex: João Silva"
                      />
                    </div>

                    <div>
                      <label htmlFor="telefone" className="block text-sm font-semibold text-slate-900 mb-2">
                        Telefone (opcional)
                      </label>
                      <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        value={formState.telefone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                        placeholder="+55 11 99999-9999"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                      E-mail Corporativo
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                      placeholder="joao.silva@empresa.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="mensagem" className="block text-sm font-semibold text-slate-900 mb-2">
                      Qual é o seu desafio atual?
                    </label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      value={formState.mensagem}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none"
                      placeholder="Descreva brevemente o gargalo da sua operação..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitStatus === 'loading'}
                    className="w-full inline-flex justify-center items-center px-6 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {submitStatus === 'loading' ? 'Enviando mensagem...' : 'Enviar Solicitação'}
                  </button>

                  {submitStatus === 'success' && (
                    <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 px-4 py-3 rounded-lg text-sm font-medium">
                      Mensagem enviada com sucesso! Retornarei o contato em breve.
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg text-sm font-medium">
                      {submitError || 'Erro ao enviar. Tente novamente ou use o WhatsApp.'}
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* Alternativas de Contato */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-slate-900 mb-8 tracking-tight">Canais Diretos</h3>

              <div className="space-y-8">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center shrink-0 text-slate-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm mb-1 uppercase tracking-widest">E-mail</h4>
                    <a href="mailto:contato@aldosantos.com" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
                      contato@aldosantos.com
                    </a>
                  </div>
                </div>

                {/* Local */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center shrink-0 text-slate-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm mb-1 uppercase tracking-widest">Base</h4>
                    <p className="text-slate-600 font-medium">
                      Lisboa, Portugal <br />
                      <span className="text-sm font-normal">Remoto Europa & Brasil</span>
                    </p>
                  </div>
                </div>

                <div className="pt-8 border-t border-slate-100">
                  <div className="bg-slate-900 rounded-2xl p-8 relative overflow-hidden">
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-500/20 rounded-full blur-2xl pointer-events-none"></div>
                    <h4 className="text-lg font-bold text-white mb-2">Agilidade Corporativa</h4>
                    <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                      Para respostas imeditas, utilize meu contato no WhatsApp.
                    </p>
                    <a
                      href="https://wa.me/351932786582?text=Olá Aldo, gostaria de agendar uma conversa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full justify-center items-center px-4 py-3 bg-emerald-600 text-white text-sm font-semibold rounded-lg hover:bg-emerald-700 transition-colors shadow-md"
                    >
                      Abrir no WhatsApp
                    </a>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
