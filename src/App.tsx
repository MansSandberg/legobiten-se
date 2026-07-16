import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Hem from './Hem'
import Om from './Om'
import Projekt from './Projekt'
import CV from './CV'
import Kontakt from './Kontakt'

function App() {
  return (
    <main id="center">
      <div className="container">
        <h1>Legobiten</h1>
        <BrowserRouter>
        <nav>
        <Link to="/">Hem</Link> |{" "}
        <Link to="/om">Om</Link> |{" "}
        <Link to="/projekt">Projekt</Link> |{" "}
        <Link to="/cv">CV</Link> |{" "}
        <Link to="/kontakt">Kontakt</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Hem />} />
        <Route path="/om" element={<Om />} />
        <Route path="/projekt" element={<Projekt />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/kontakt" element={<Kontakt />} />
      </Routes>
        </BrowserRouter>
        <p>En enkel sida — innehållet ligger på vitt underlag.</p>
      </div>
    </main>
  )
}

export default App
