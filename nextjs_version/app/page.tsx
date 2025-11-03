export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-git-orange via-git-red to-github-purple text-white">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hello Git & GitHub 🐙
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Curso completo de 5 horas y 45 lecciones para aprender a trabajar con Git & GitHub desde cero
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#lessons"
                className="bg-white text-git-orange px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Ver Lecciones
              </a>
              <a
                href="https://github.com/mouredev/hello-git"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-github-dark text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                Ver en GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Lo que aprenderás
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Fundamentos de Git</h3>
              <p className="text-gray-600">
                Historia, conceptos principales y flujo de trabajo desde cero
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Manejo de Terminal</h3>
              <p className="text-gray-600">
                Más de 25 comandos de Git con ejemplos prácticos
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🐙</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">GitHub desde Cero</h3>
              <p className="text-gray-600">
                Configuración, autenticación e integración con Git
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Flujo Colaborativo</h3>
              <p className="text-gray-600">
                Trabajo en equipo, pull requests y code reviews
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Herramientas</h3>
              <p className="text-gray-600">
                Instalación, configuración y herramientas destacadas
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Ejemplos Prácticos</h3>
              <p className="text-gray-600">
                Casos reales y ejercicios para practicar
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-git-orange mb-2">5 horas</div>
              <p className="text-gray-600">de contenido en vídeo</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-github-purple mb-2">45</div>
              <p className="text-gray-600">lecciones completas</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-git-red mb-2">25+</div>
              <p className="text-gray-600">comandos de Git</p>
            </div>
          </div>
        </div>
      </section>

      {/* Book Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              📖 Libro de Git & GitHub
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Una guía de estudio teórico-práctica paso a paso de 300 hojas para complementar el curso
            </p>
            <div className="bg-gradient-to-r from-git-orange to-github-purple p-8 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-4">Segunda Edición - Abril 2024</h3>
              <p className="mb-6">
                Actualización de imágenes, sección GitHub Actions y pequeñas correcciones
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://mouredev.com/libro-git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-git-orange px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Tapa Blanda y Kindle
                </a>
                <a
                  href="https://mouredev.com/ebook-git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-github-dark text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                >
                  eBook (PDF, EPUB, Web)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-github-dark to-github-purple text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para empezar?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Comienza tu viaje en el control de versiones con Git & GitHub
          </p>
          <a
            href="https://github.com/mouredev/hello-git"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-github-dark px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Ir al Repositorio
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">
            Proyecto realizado durante emisiones en directo desde{' '}
            <a
              href="https://twitch.tv/mouredev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-github-purple hover:underline"
            >
              Twitch
            </a>
          </p>
          <p className="text-gray-400">
            Si consideras útil el curso, apóyalo haciendo ★ Star en el repositorio
          </p>
        </div>
      </footer>
    </main>
  )
}
