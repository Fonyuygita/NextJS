import Navbar from '@/component/navbar/Navbar'
import './globals.css'
import { Inter, Poppins, Roboto } from 'next/font/google'
import Footer from '@/component/footer/Footer'
import { ThemeProvider } from '@/context/darkModeContext'
import AuthProvider from '@/component/SessionProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Gita Tech Blog App',
  description: 'My tech Blog app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <div className='container'>
              <Navbar />
              {children}
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
