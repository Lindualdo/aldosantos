interface CTASectionProps {
  title: string
  description: string
  buttonText: string
  buttonLink: string
  backgroundColor?: string
}

export default function CTASection({ 
  title, 
  description, 
  buttonText, 
  buttonLink,
  backgroundColor = 'bg-secondary'
}: CTASectionProps) {
  return (
    <section className={`${backgroundColor} section-padding`}>
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            {title}
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-95">
            {description}
          </p>
          <a 
            href={buttonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-white text-secondary hover:bg-gray-100 text-lg px-8 py-4 inline-block"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  )
}
