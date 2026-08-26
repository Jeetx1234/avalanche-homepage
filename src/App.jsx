import React from 'react'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Landingpage from './pages/LandingPage.jsx'

const App = () => {
  return (
   <Router>
    <Routes>
      <Route  path='/' element={<Landingpage/> }/>
   
      
    </Routes>
  </Router>
  )
}

export default App