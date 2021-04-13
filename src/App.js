// import { useState } from 'react'
// import axios from 'axios'
import { 
  BrowserRouter as Router,
  Route,
  Switch
 } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import './App.css'


const App = () => {
  return (
    <>
      <Router>
        <div>

          <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <img src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/981/5022957981_eb0482ae-a651-4bc2-8064-743a9ea75ed1.png?cb=1617925199" alt="My Logo" width="50" height="32" className="d-inline-block align-text-top" />
                <a className="navbar-brand" href="/"> Home</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="/portfolio">Portfolio</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/contact">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
          <Switch>

      <Route exact path='/'>
         <Home />
      </Route>

      <Route path='/portfolio'>
        <Portfolio />
      </Route>

      <Route path='/contact'>
         <Contact />
      </Route>

          </Switch>
        </div>
      </Router>
  
    </>
  )
}

export default App
