interface HeroProps {
  title: string
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
  bgColor?: 'dark' | 'blue' | 'orange' | 'purple'
}

export default function Hero({
  title,
  subtitle,
  description,
  description2,
  primaryCTA,
  secondaryCTA,
  bgColor = 'dark'
}: HeroProps) {
  const bgColors = {
    dark: 'bg-gradient-to-br from-gray-900 to-gray-800',
    blue: 'bg-gradient-to-br from-primary to-blue-600',
    orange: 'bg-gradient-to-br from-accent to-red-600',
    purple: 'bg-gradient-to-br from-secondary to-purple-600'
  }

  return (
    <section className={`${bgColors[bgColor]} text-white section-padding`}>
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            {title}
          </h1>
          
          {subtitle && (
            <p className="text-2xl md:text-3xl font-semibold mb-6">
              {subtitle}
            </p>
          )}
          
          <p className="text-xl mb-6 text-gray-300 leading-relaxed">
            {description}
          </p>
          
          {description2 && (
            <p className="text-lg mb-10 text-gray-300 leading-relaxed">
              {description2}
            </p>
          )}
          
          {(primaryCTA || secondaryCTA) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {primaryCTA && (
                <a 
                  href={primaryCTA.href}
                  target={primaryCTA.href.startsWith('http') ? '_blank' : undefined}
                  rel={primaryCTA.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors text-center"
                >
                  {primaryCTA.text}
                </a>
              )}
              
              {secondaryCTA && (
                <a 
                  href={secondaryCTA.href}
                  className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors text-center"
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
