import { useState } from 'react'
import Home from './pages/Home'

import './App.css'
import ThemeApplier from './components/ThemeApplier'
import Header from './components/header/HEader'
import Footer from './components/footer/Footer'

function App() {


  return (
    <>
      <ThemeApplier />
      <Header />
      <Home />
      <Footer />

    </>
  )
}

export default App
