interface FeatureCardProps {
  icon: string
  title: string
  description: string
  variant?: 'default' | 'bordered' | 'elevated'
}

export default function FeatureCard({
  icon,
  title,
  description,
  variant = 'default',
}: FeatureCardProps) {
  const variantClasses = {
    default: 'bg-white hover:shadow-lg',
    bordered: 'bg-white border-2 border-git-orange hover:shadow-git',
    elevated: 'bg-gradient-to-br from-white to-gray-50 shadow-md hover:shadow-xl',
  }

  return (
    <div
      className={`p-6 rounded-lg transition-all duration-300 ${variantClasses[variant]}`}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
