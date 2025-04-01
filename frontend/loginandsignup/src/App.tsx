import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Signuppage from './components/signup_page/signup';
import Loginpage from './components/login_page/login';


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
            <Route path='/login' element={

              <>
                <Loginpage />
              </>
            } />
        </Routes>
      </Router>
    </>
  )
}

export default App