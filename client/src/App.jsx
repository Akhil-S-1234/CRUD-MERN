import React from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import About from './pages/About'
import Header from './components/Header'
import PrivateRoute from './components/PrivateRoute'
import AdminLogin from './pages/AdminLogin'
import AdminDashboard from './pages/adminDashboard'
import BlockedRoute from './components/BlockedRoute'
import ProtectedRoute from './components/ProtectedRoute'


function App() {

  const { currentUser } = useSelector((state) => state.user)
  
  console.log(currentUser)

  return (
    <BrowserRouter>
      
      <Routes>
        
        <Route element={<BlockedRoute/>}>
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />} />
        </Route>   
        

        <Route element = { <ProtectedRoute isPublic={true} />}>
              <Route path="/admin/login" element={<AdminLogin />} /> 
        </Route>

        <Route element = { <ProtectedRoute isPublic={false} />}>
               <Route path='/admin/dashboard' element = {<AdminDashboard />} />
        </Route>


        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />

          
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
