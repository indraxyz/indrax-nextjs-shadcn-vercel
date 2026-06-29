import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"

const geist = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: "Indra Cahya Edytya - Software Engineer",
  description: "Personal portfolio website of Indra Cahya Edytya, Fullstack Software Engineer",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="min-h-screen bg-background [font-family:var(--font-geist)] antialiased">
        {children}
      </body>
    </html>
  )
}
