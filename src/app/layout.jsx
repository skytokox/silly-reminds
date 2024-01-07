import { Rubik } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Provider from './components/Provider'

const rubik = Rubik({ subsets: ['latin'] })

export const metadata = {
  title: 'SillyReminds',
  description: 'not yet',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Provider>
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  )
}
