interface HeroProps {
  title: string
  subtitle: string
  primaryCTA?: {
    text: string
    href: string
  }
  secondaryCTA?: {
    text: string
    href: string
  }
  gradient?: boolean
}

export default function Hero({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  gradient = true,
}: HeroProps) {
  const bgClass = gradient
    ? 'bg-gradient-to-br from-git-orange via-git-red to-github-purple'
    : 'bg-github-dark'

  return (
    <section className={`${bgClass} text-white`}>
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            {subtitle}
          </p>
          {(primaryCTA || secondaryCTA) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {primaryCTA && (
                <a
                  href={primaryCTA.href}
                  className="bg-white text-git-orange px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  {primaryCTA.text}
                </a>
              )}
              {secondaryCTA && (
                <a
                  href={secondaryCTA.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-github-dark text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors border-2 border-white/20"
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
