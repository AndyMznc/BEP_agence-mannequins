import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Navbar from './layout/Navbar'
import About from './pages/About'
import ApplyProfil from './pages/ApplyProfil'
import Contact from './pages/Contact'
import ErrorPage from './pages/ErrorPage'
import Home from './pages/Home'
import ModelSingle from './pages/ModelSingle'
import Models from './pages/Models'
import './styles/index.scss'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="mannequins" element={<Models />}></Route>
            <Route path="mannequins/:slug" element={<ModelSingle />}></Route>
            <Route path="postuler" element={<ApplyProfil />}></Route>
            <Route path="contact" element={<Contact />}></Route>
            <Route path="*" element={<ErrorPage />}></Route>
          </Routes>
        </main>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  )
}

export default App
