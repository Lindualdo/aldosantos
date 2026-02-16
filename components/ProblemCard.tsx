interface ProblemCardProps {
  title: string
  description: string
}

export default function ProblemCard({ title, description }: ProblemCardProps) {
  return (
    <div className="card border-l-4 border-accent bg-red-50">
      <h4 className="text-xl font-heading font-bold text-dark mb-3">
        {title}
      </h4>
      <p className="text-gray-700 leading-relaxed">
        {description}
      </p>
    </div>
  )
}
