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
import Navbar from './components/Navbar'
import './App.css'


const App = () => {
  return (
    <>
      <Router>
        <div>

          <Navbar />
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
