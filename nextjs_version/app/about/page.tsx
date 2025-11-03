export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-github-dark to-github-purple text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Acerca del Curso
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Un proyecto educativo creado con pasión para la comunidad de desarrolladores
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Project Info */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Sobre el Proyecto
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-4">
                Hello Git & GitHub es un curso completo y gratuito diseñado para enseñar control de versiones desde cero. 
                Con más de 5 horas de contenido en vídeo y 45 lecciones prácticas, este proyecto busca hacer accesible 
                el aprendizaje de Git y GitHub para toda la comunidad hispanohablante.
              </p>
              <p className="text-gray-600 mb-4">
                El curso fue creado durante emisiones en directo desde Twitch, permitiendo una interacción directa con 
                la comunidad y respondiendo dudas en tiempo real. Esta metodología ha permitido crear un contenido 
                adaptado a las necesidades reales de los estudiantes.
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Características del Curso
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-git-orange">
                  📚 Contenido Completo
                </h3>
                <p className="text-gray-600">
                  45 lecciones que cubren desde los fundamentos hasta técnicas avanzadas de Git y GitHub.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-git-orange">
                  🎥 Vídeos HD
                </h3>
                <p className="text-gray-600">
                  Más de 5 horas de contenido en vídeo de alta calidad, explicado paso a paso.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-git-orange">
                  💻 Ejemplos Prácticos
                </h3>
                <p className="text-gray-600">
                  Casos reales y ejercicios prácticos para aplicar lo aprendido inmediatamente.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-git-orange">
                  🆓 Totalmente Gratis
                </h3>
                <p className="text-gray-600">
                  Acceso completo y gratuito a todo el contenido, sin restricciones ni pagos.
                </p>
              </div>
            </div>
          </div>

          {/* Author */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Sobre el Autor
            </h2>
            <div className="bg-gradient-to-r from-git-orange to-github-purple p-8 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-4">MoureDev</h3>
              <p className="mb-4">
                Brais Moure es un desarrollador de software con más de 15 años de experiencia en la industria. 
                Creador de contenido educativo en YouTube, Twitch y otras plataformas, donde comparte su conocimiento 
                con una comunidad de más de 1 millón de seguidores.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://mouredev.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-git-orange px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Web
                </a>
                <a
                  href="https://youtube.com/@mouredev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-git-orange px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  YouTube
                </a>
                <a
                  href="https://twitch.tv/mouredev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-git-orange px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Twitch
                </a>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              ¿Listo para empezar?
            </h2>
            <p className="text-gray-600 mb-6">
              Únete a miles de estudiantes que ya están aprendiendo Git & GitHub
            </p>
            <a
              href="https://github.com/mouredev/hello-git"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-git-orange text-white px-8 py-3 rounded-lg font-semibold hover:bg-git-red transition-colors"
            >
              Comenzar Ahora
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
