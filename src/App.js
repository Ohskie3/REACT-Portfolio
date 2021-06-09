
import { 
  BrowserRouter as Router,
  Route,
  Switch
 } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'
import { useEffect } from 'react'



const App = () => {
  useEffect(() => {
    document.title = "Kyle Ohlwiler"
  })
  return (
    <>
      <Router>
        <div>

          {/* <Navbar /> */}
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
          <div className="footer">
        <Footer />
          </div>
        </div>
      </Router>
  
    </>
  )
}

export default App
