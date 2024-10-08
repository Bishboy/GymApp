import { useState } from 'react'
import Hero from './component/Hero'
import './App.css'
import Programs from './component/Programs'
import Reasons from './component/Reasons'
import Plan from './component/Plan'
import Testimonial from './component/Testimonial'
import Join from './component/Join'
import Footer from './component/Footer'


function App() {
  

  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plan />
      <Testimonial />
      <Join />
      <Footer />
    </div>
  )
}

export default App
