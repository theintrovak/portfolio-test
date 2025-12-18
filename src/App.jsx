import { useState } from 'react'
import Home from './pages/Home'

import './App.css'
import ThemeApplier from './components/ThemeApplier'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { BackgroundLines } from './components/ui/background-lines'

function App() {


  return (
    <>
      <BackgroundLines className={"fixed inset-0 -z-10 bg-center bg-cover pointer-events-none"} />

      <ThemeApplier />
      <Header />
      <Home />
      <Footer />

    </>
  )
}

export default App
