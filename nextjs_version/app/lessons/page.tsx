import LessonCard from '@/components/LessonCard'

export default function LessonsPage() {
  const lessons = [
    {
      number: 1,
      title: 'Introducción a Git',
      description: 'Conoce qué es Git, su historia y por qué es fundamental en el desarrollo de software moderno.',
      duration: '15 min',
      topics: ['Historia', 'Fundamentos', 'Instalación'],
      videoUrl: 'https://youtu.be/3GymExBkKjE',
    },
    {
      number: 2,
      title: 'Configuración Inicial',
      description: 'Aprende a configurar Git por primera vez, establecer tu identidad y personalizar tu entorno.',
      duration: '10 min',
      topics: ['Config', 'User', 'Email'],
      videoUrl: 'https://youtu.be/3GymExBkKjE',
    },
    {
      number: 3,
      title: 'Repositorio Local',
      description: 'Crea tu primer repositorio Git y entiende la estructura básica de un proyecto con control de versiones.',
      duration: '12 min',
      topics: ['Init', 'Clone', 'Estructura'],
      videoUrl: 'https://youtu.be/3GymExBkKjE',
    },
    {
      number: 4,
      title: 'Área de Trabajo',
      description: 'Comprende las tres áreas principales: working directory, staging area y repository.',
      duration: '18 min',
      topics: ['Working Dir', 'Staging', 'Repository'],
      videoUrl: 'https://youtu.be/3GymExBkKjE',
    },
    {
      number: 5,
      title: 'Comandos Básicos',
      description: 'Domina los comandos esenciales: add, commit, status, log y diff.',
      duration: '20 min',
      topics: ['Add', 'Commit', 'Status', 'Log'],
      videoUrl: 'https://youtu.be/3GymExBkKjE',
    },
    {
      number: 6,
      title: 'Ramas (Branches)',
      description: 'Aprende a crear y gestionar ramas para trabajar en diferentes funcionalidades de forma aislada.',
      duration: '25 min',
      topics: ['Branch', 'Checkout', 'Merge'],
      videoUrl: 'https://youtu.be/3GymExBkKjE',
    },
    {
      number: 7,
      title: 'Fusiones (Merge)',
      description: 'Entiende cómo combinar cambios de diferentes ramas y resolver conflictos.',
      duration: '22 min',
      topics: ['Merge', 'Conflictos', 'Resolución'],
      videoUrl: 'https://youtu.be/3GymExBkKjE',
    },
    {
      number: 8,
      title: 'GitHub Básico',
      description: 'Introducción a GitHub, creación de cuenta y configuración de autenticación.',
      duration: '15 min',
      topics: ['GitHub', 'SSH', 'Token'],
      videoUrl: 'https://youtu.be/3GymExBkKjE',
    },
    {
      number: 9,
      title: 'Repositorio Remoto',
      description: 'Conecta tu repositorio local con GitHub y aprende a sincronizar cambios.',
      duration: '18 min',
      topics: ['Remote', 'Push', 'Pull'],
      videoUrl: 'https://youtu.be/3GymExBkKjE',
    },
    {
      number: 10,
      title: 'Colaboración',
      description: 'Trabaja en equipo: pull requests, code reviews y flujo de trabajo colaborativo.',
      duration: '30 min',
      topics: ['PR', 'Fork', 'Colaboración'],
      videoUrl: 'https://youtu.be/3GymExBkKjE',
    },
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-git-orange to-github-purple text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Lecciones del Curso
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            45 lecciones completas para dominar Git & GitHub desde cero hasta nivel avanzado
          </p>
        </div>
      </section>

      {/* Lessons Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {lessons.map((lesson) => (
              <LessonCard key={lesson.number} {...lesson} />
            ))}
          </div>

          {/* More Lessons Notice */}
          <div className="mt-12 text-center">
            <div className="bg-white border-2 border-git-orange rounded-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                ¡Y muchas más lecciones!
              </h3>
              <p className="text-gray-600 mb-6">
                Este curso incluye 45 lecciones completas. Visita el repositorio de GitHub para acceder al contenido completo.
              </p>
              <a
                href="https://github.com/mouredev/hello-git"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-git-orange text-white px-8 py-3 rounded-lg font-semibold hover:bg-git-red transition-colors"
              >
                Ver Curso Completo
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
