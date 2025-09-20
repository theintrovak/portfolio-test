import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'
import App from './App.jsx'
import { store } from './store/Store.js'
import Header from './components/header/HEader.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store} >
      <Header />
    </Provider>
  </StrictMode>,
)
