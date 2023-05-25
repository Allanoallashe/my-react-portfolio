import React from 'react'
import Header from './Components/Header'
import Nav from './Components/Nav'
import About from './Components/About'
import Experience from './Components/Experience'
import Services from './Components/Services'
import Portfolio from './Components/Portfolio'
import Testimonials from './Components/Testimonials'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

const App = () => {
  return (
    <main>
      < Header />
      < Nav />
      < About/>
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}

export default App;