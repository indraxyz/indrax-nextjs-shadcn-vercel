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

const themeScript = `
(() => {
  try {
    const storageKey = "indrax-theme";
    const theme = localStorage.getItem(storageKey) || "dark";
    const systemTheme = matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const resolvedTheme = theme === "system" ? systemTheme : theme;

    document.documentElement.classList.toggle("dark", resolvedTheme === "dark");
    document.documentElement.dataset.theme = theme;
  } catch {
    document.documentElement.classList.add("dark");
    document.documentElement.dataset.theme = "dark";
  }
})();
`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={geist.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen bg-background [font-family:var(--font-geist)] antialiased">
        {children}
      </body>
    </html>
  )
}
