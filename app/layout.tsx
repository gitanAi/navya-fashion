import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import "./globals.css"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Navya Fashion | Premium Textile & Fabrics",
  description: "Navya Fashion - Weaving Elegance, One Fabric at a Time. Premium textile and fashion house from Surat.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${poppins.variable} font-sans antialiased flex flex-col min-h-screen`}
      >
        <Navbar />

        <main className="flex-grow">{children}</main>

        <Footer />

        <Analytics />
      </body>
    </html>
  )
}
