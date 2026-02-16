import Link from 'next/link'

interface ServiceCardProps {
  title: string
  description: string
  link: string
}

export default function ServiceCard({ title, description, link }: ServiceCardProps) {
  return (
    <div className="card h-full flex flex-col">
      <h3 className="text-2xl font-heading font-bold text-dark mb-4">
        {title}
      </h3>
      <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
        {description}
      </p>
      <Link href={link} className="btn btn-outline w-full">
        Saiba Mais
      </Link>
    </div>
  )
}
