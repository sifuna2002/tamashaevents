import Image from 'next/image'
import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer'
import { Services } from './components/Services'
import { Testimonial } from './components/Testimonial'

export default function Home() {
  return (
    <main className='w-full flex flex-col'>
      <NavBar />
      <Services />
      <Testimonial />
      <Footer />
    </main>
  )
}
