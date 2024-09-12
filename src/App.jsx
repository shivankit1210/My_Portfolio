import './App.css'
import Header from './components/Header'
// import Intro from './components/Intro'
import Contact from './components/Contact'
import About from './components/About'
import { Route, Routes } from 'react-router-dom'
import Intro from './components/Intro'

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/contact" element={<Contact />}/>
      <Route path="/about" element={<About />}/>
    </Routes>
    </>
  )
}

export default App
