export default function BookPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-git-orange via-git-red to-github-purple text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-6">📖</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Libro de Git & GitHub
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Guía de estudio teórico-práctica paso a paso de 300 hojas
          </p>
        </div>
      </section>

      {/* Book Info */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Segunda Edición - Abril 2024
              </h2>
              <p className="text-gray-600 mb-6">
                Una guía completa de 300 páginas que complementa perfectamente el curso en vídeo. 
                Incluye explicaciones detalladas, diagramas, ejemplos prácticos y ejercicios para 
                dominar Git & GitHub.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">✅</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Actualización de imágenes</h3>
                    <p className="text-gray-600">Diagramas y capturas actualizadas</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">✅</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">GitHub Actions</h3>
                    <p className="text-gray-600">Nueva sección sobre automatización</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">✅</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Otros comandos</h3>
                    <p className="text-gray-600">Comandos adicionales y casos de uso</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-8 rounded-lg">
              <div className="bg-white p-6 rounded-lg shadow-xl">
                <div className="text-center mb-4">
                  <div className="text-6xl mb-4">📚</div>
                  <h3 className="text-2xl font-bold text-gray-900">Hello Git</h3>
                  <p className="text-gray-600">Segunda Edición</p>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-sm text-gray-600 text-center">
                    300 páginas • Español • 2024
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Purchase Options */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="bg-gradient-to-br from-git-orange to-git-red text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Tapa Blanda y Kindle</h3>
              <p className="mb-6 text-white/90">
                Versión física en tapa blanda o digital para Kindle de Amazon
              </p>
              <a
                href="https://mouredev.com/libro-git"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-git-orange px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Comprar en Amazon
              </a>
            </div>
            <div className="bg-gradient-to-br from-github-purple to-github-dark text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">eBook Digital</h3>
              <p className="mb-6 text-white/90">
                Formatos PDF, EPUB y versión web para leer en cualquier dispositivo
              </p>
              <a
                href="https://mouredev.com/ebook-git"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-github-purple px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Comprar eBook
              </a>
            </div>
          </div>

          {/* What's Inside */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
              Contenido del Libro
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6">
                <div className="text-4xl mb-4">📖</div>
                <h3 className="font-semibold mb-2 text-gray-900">Teoría Completa</h3>
                <p className="text-gray-600">
                  Fundamentos y conceptos explicados en detalle
                </p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl mb-4">💻</div>
                <h3 className="font-semibold mb-2 text-gray-900">Ejemplos Prácticos</h3>
                <p className="text-gray-600">
                  Casos reales y ejercicios paso a paso
                </p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="font-semibold mb-2 text-gray-900">Diagramas</h3>
                <p className="text-gray-600">
                  Ilustraciones y esquemas visuales
                </p>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">
              Lo que dicen los lectores
            </h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-git-orange pl-4">
                <p className="text-gray-600 italic mb-2">
                  "El mejor recurso en español para aprender Git. Explicaciones claras y ejemplos prácticos."
                </p>
                <cite className="text-sm text-gray-500">- Estudiante de programación</cite>
              </blockquote>
              <blockquote className="border-l-4 border-github-purple pl-4">
                <p className="text-gray-600 italic mb-2">
                  "Complemento perfecto para el curso en vídeo. Lo recomiendo 100%."
                </p>
                <cite className="text-sm text-gray-500">- Desarrollador profesional</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
