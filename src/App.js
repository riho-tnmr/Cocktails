import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import pages
import Home from './pages/Home'
import About from './pages/About'
import SingleCocktail from './pages/SingleCocktail'
import SharedLayout from './pages/SharedLayout'
import Error from './pages/Error'
// import components
import Navbar from './components/Navbar'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<SharedLayout/>}>
          <Route index element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='*' element={<Error/>}/>
          <Route path='cocktail/'>
            <Route path=':cocktailId' element={<SingleCocktail/>}/>
          </Route>
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
