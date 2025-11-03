interface LessonCardProps {
  number: number
  title: string
  description: string
  duration: string
  videoUrl?: string
  topics?: string[]
}

export default function LessonCard({
  number,
  title,
  description,
  duration,
  videoUrl,
  topics = [],
}: LessonCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300 group">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-br from-git-orange to-git-red text-white w-12 h-12 rounded-lg flex items-center justify-center font-bold text-lg">
            {number}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-git-orange transition-colors">
              {title}
            </h3>
            <span className="text-sm text-gray-500">{duration}</span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 mb-4">{description}</p>

      {/* Topics */}
      {topics.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {topics.map((topic, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
            >
              {topic}
            </span>
          ))}
        </div>
      )}

      {/* Action */}
      {videoUrl && (
        <a
          href={videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-git-orange hover:text-git-red font-medium transition-colors"
        >
          Ver lección
          <svg
            className="w-5 h-5 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>
      )}
    </div>
  )
}
