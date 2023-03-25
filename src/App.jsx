import React from 'react'
import Home from './screens/Home'
import "./app.css"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import  {Login} from './screens/Login'
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import { Signup } from './screens/Signup'
// import '../node_modules/bootstrap-dark-5/dist/js/bootstarp.bundle'
// import '../node_modules/bootstrap-dark-5/dist/js/bootstrap.bundle.min.js'

const App = () => {           
  return (
    <Router>
        <div>
          <Routes>
            <Route exact path = "/" element = {<Home />} />
            <Route exact path = "/login" element = {<Login />} />
            <Route exact path = "/creatuser" element = {<Signup />} />
          </Routes>
        </div>
    </Router>
  )
}

export default App