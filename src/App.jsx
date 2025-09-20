import { useState } from 'react'
import Home from './pages/Home'

import './App.css'
import ThemeApplier from './components/ThemeApplier'
import Header from './components/header/HEader'

function App() {


  return (
    <>
      <ThemeApplier />
      <Header />
      <Home />

    </>
  )
}

export default App
