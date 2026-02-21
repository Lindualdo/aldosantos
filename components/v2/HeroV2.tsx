interface HeroV2Props {
  title: string
  highlight?: string
  subtitle?: string
  description: string
  description2?: string
  primaryCTA?: {
    text: string
    href: string
  }
  secondaryCTA?: {
    text: string
    href: string
  }
}

export default function HeroV2({
  title,
  highlight,
  subtitle,
  description,
  description2,
  primaryCTA,
  secondaryCTA,
}: HeroV2Props) {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white section-padding relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {subtitle && (
            <p className="text-primary font-semibold text-lg mb-4 tracking-wide uppercase">
              {subtitle}
            </p>
          )}

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
            {title}
            {highlight && (
              <>
                <br />
                <span className="text-primary">{highlight}</span>
              </>
            )}
          </h1>

          <p className="text-xl mb-6 text-gray-300 leading-relaxed max-w-3xl mx-auto">
            {description}
          </p>

          {description2 && (
            <p className="text-lg mb-10 text-gray-400 leading-relaxed max-w-2xl mx-auto">
              {description2}
            </p>
          )}

          {(primaryCTA || secondaryCTA) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              {primaryCTA && (
                <a
                  href={primaryCTA.href}
                  target={primaryCTA.href.startsWith('http') ? '_blank' : undefined}
                  rel={primaryCTA.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors text-center shadow-lg hover:shadow-xl"
                >
                  {primaryCTA.text}
                </a>
              )}

              {secondaryCTA && (
                <a
                  href={secondaryCTA.href}
                  className="bg-transparent border-2 border-white/30 hover:border-white hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all text-center"
                >
                  {secondaryCTA.text}
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
