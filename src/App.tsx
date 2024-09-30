import { useState } from 'react'
import Hero from './component/Hero'
import './App.css'
import Programs from './component/Programs'
import Reasons from './component/Reasons'


function App() {
  

  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
    </div>
  )
}

export default App
