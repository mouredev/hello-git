import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hello Git & GitHub - Curso Completo',
  description: 'Curso completo de Git & GitHub desde cero. Aprende Git, GitHub, comandos, flujo de trabajo y mucho más.',
  keywords: ['git', 'github', 'curso', 'tutorial', 'programación', 'control de versiones'],
  authors: [{ name: 'MoureDev' }],
  openGraph: {
    title: 'Hello Git & GitHub - Curso Completo',
    description: 'Curso completo de Git & GitHub desde cero',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  )
}
