import type { Metadata } from 'next'
import { Inter } from "next/font/google";
import "./globals.css";
import GlobalStyles from '@/styles/GlobalStyles'
import StyledComponentsRegistry from '@/lib/registry'
import { Navbar, StarsCanvas, Footer } from '@/components'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Space Portfolio",
  description: "This is my portfolio",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <StyledComponentsRegistry>
          <GlobalStyles />
          <Navbar />
          <StarsCanvas />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
