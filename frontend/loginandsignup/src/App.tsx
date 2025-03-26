import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Signuppage from './components/signup_page/signup';


const App = () =>{

  return(
    <>
      <Router>  
        <Routes>
            <Route path='/' element={
              <>
                <Signuppage />
              </>
            }/>
        </Routes>
      </Router>
    </>
  )
}

export default App