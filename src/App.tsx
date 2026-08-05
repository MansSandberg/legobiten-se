import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Hem from './Hem'
import Om from './Om'
import Projekt from './Projekt'
import Erfarenhet from './Erfarenhet'
import Kontakt from './Kontakt'

function App() {
  return (
    <main className="center">
      <div className="container">
        <h1>Legobiten</h1>
        <nav>
        <Link to="/">Hem</Link> |{" "}
        <Link to="/om">Om</Link> |{" "}
        <Link to="/projekt">Projekt</Link> |{" "}
        <Link to="/erfarenhet">Erfarenhet</Link> |{" "}
        <Link to="/kontakt">Kontakt</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Hem />} />
        <Route path="/om" element={<Om />} />
        <Route path="/projekt" element={<Projekt />} />
        <Route path="/erfarenhet" element={<Erfarenhet />} />
        <Route path="/kontakt" element={<Kontakt />} />
      </Routes>

        <footer>
          <p>&copy; 2026 Måns Sandberg</p>
          <p>  
            <a href="https://github.com/MansSandberg" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              {/* GitHub SVG icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{verticalAlign: 'middle'}}>
                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.35-1.3-1.71-1.3-1.71-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.76.41-1.27.75-1.56-2.56-.29-5.26-1.28-5.26-5.71 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.64 1.58.24 2.75.12 3.04.74.81 1.19 1.84 1.19 3.1 0 4.44-2.71 5.41-5.29 5.69.42.36.8 1.08.8 2.18 0 1.57-.01 2.83-.01 3.22 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" />
              </svg>
              &nbsp;GitHub
            </a>
            &nbsp;|&nbsp;
            <a href="https://www.linkedin.com/in/m%C3%A5ns-sandberg-199294138/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              {/* LinkedIn SVG icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{verticalAlign: 'middle'}}>
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.79-1.75-1.763s.784-1.762 1.75-1.762c.966 0 1.75.79 1.75 1.762s-.784 1.763-1.75 1.763zm13.5 10.268h-3v-4.5c0-1.074-.021-2.455-1.496-2.455-1.497 0-1.727 1.17-1.727 2.378v4.577h-3v-9h2.881v1.233h.041c.401-.76 1.379-1.562 2.839-1.562 3.036 0 3.599 1.999 3.599 4.596v4.733z" />
              </svg>
              &nbsp;LinkedIn
            </a>
         <span className='footer-note'>
          Byggt med React, TypeScript och Vite.
          </span>
          </p>
        </footer>
      </div>
    </main>
  )
}

export default App
