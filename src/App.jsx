import './App.css'
import Header from './components/Header'
import Contact from './components/Contact'
import About from './components/About'
import Education from './components/Education'
import { Route, Routes } from 'react-router-dom'
import Intro from './components/Intro'

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/education" element={<Education/>}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/about" element={<About />}/>
    </Routes>
    </>
  )
}

export default App
