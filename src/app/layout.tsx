import './globals.css'
import { Poppins } from 'next/font/google'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata = {
  title: 'Coding Ferpa',
  description: 'Comunidade de tecnologia para jovens em Fernandópolis',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.className} flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
