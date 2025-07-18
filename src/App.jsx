import React from 'react'
import About from './sections/About'
import Music from './sections/Music'
import Gallery from './sections/Gallery'
import Tour from './sections/Tour'
import Contact from './sections/Contact'

const App = () => {
  return (
    <div className="font-sans">
      <header className="text-center py-10 text-4xl font-bold text-gold">6DM</header>
      <About />
      <Music />
      <Gallery />
      <Tour />
      <Contact />
    </div>
  )
}

export default App