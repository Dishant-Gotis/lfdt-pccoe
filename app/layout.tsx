import type { Metadata } from "next"
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import "./globals.css"

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage-grotesque",
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
})

export const metadata: Metadata = {
  title: "Lfdt Pccoe | Blockchain Club",
  description: "A modern website for Lfdt Pccoe, the blockchain club of PCCOE.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable} ${bricolageGrotesque.variable} antialiased flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

