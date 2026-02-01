import type { ReactNode } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FloatingCartButton from "../components/FloatingCartButton"


type Props = {
  children: ReactNode
}

function MainLayout({ children }: Props) {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <FloatingCartButton />
      <Footer />
    </div>
  )
}

export default MainLayout
