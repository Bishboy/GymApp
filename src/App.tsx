import { useState } from 'react'
import Hero from './component/Hero'
import './App.css'
import Programs from './component/Programs'
import Reasons from './component/Reasons'
import Plan from './component/Plan'


function App() {
  

  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plan />
    </div>
  )
}

export default App
