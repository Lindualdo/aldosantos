interface SolutionCardProps {
  title: string
  description: string
}

export default function SolutionCard({ title, description }: SolutionCardProps) {
  return (
    <div className="card bg-gradient-to-br from-white to-blue-50">
      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
      <h4 className="text-xl font-heading font-bold text-dark mb-3">
        {title}
      </h4>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  )
}
