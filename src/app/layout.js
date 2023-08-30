import './globals.css'
import {Lato} from 'next/font/google'
import Header from './Components/Header.js'
import Footer from './Components/Footer.js'


const lato = Lato({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '300', '400', '700', '900']
})

export const metadata = {
  title: 'Febulab',
  description: 'Febulab Scientific Services Limited aids in Africa’s growth in science and technology  By offering dependable tools, and equipment,',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className}>
          <main>
            <Header/>
              {children}
            <Footer/>  
          </main>
      </body>
    </html>
  )
}
