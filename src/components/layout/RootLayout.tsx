import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { ScrollToTop } from './ScrollToTop'
import { StructuredData } from './StructuredData'
import { WhatsAppFloat } from './WhatsAppFloat'

export function RootLayout() {
  return (
    <>
      <ScrollToTop />
      <StructuredData />
      <Navbar />
      <Outlet />
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
