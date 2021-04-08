// import { useState } from 'react'
// import axios from 'axios'
import { 
  BrowserRouter as Router,
  Route,
  Switch,
  Link
 } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/About'
import Profile from './pages/Portfolio'

const App = () => {
  return (
    <>
      <Router>
        <div>
          <div>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/portfolio'>Portfolio</Link>
          </div>
          <Switch>

      <Route exact path='/'>
         <Home />
      </Route>

      <Route path='/about'>
        <About />
      </Route>

      <Route path='/portfolio'>
         <Portfolio />
      </Route>

      
          </Switch>
        </div>
      </Router>
    

    </>
  )
}

export default App
