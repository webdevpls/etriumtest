import './global.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/navbar/navbar.tsx'
import Home from './components/home/home.tsx'
import About from './components/about/about.tsx'
import Whyus from './components/whyus/whyus.tsx'
import Servcies from './components/services/services.tsx'
import Planos from './components/planos/planos.tsx'
import Contact from './components/contact/contat.tsx'
import Footer from './components/footer/footer.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navbar/>
    <Home/>
    <About/>
    <Whyus/>
    <Servcies/>
    <Planos/>
    <Contact/>
    <Footer/>
  </React.StrictMode>,
)
