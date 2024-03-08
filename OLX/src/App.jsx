import React,{useContext,useEffect} from 'react';
import './App.css'
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Create from './Pages/Create'
import {AuthContext} from './Store/FirebaseContext'
import {auth} from './Firebase/config'
import { onAuthStateChanged } from 'firebase/auth';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './Pages/Login';



function App() {

  const {setUser} = useContext(AuthContext)

  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      setUser(user)
      console.log(user,'heeeeeeeee')
    })
  },[])

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/create' element={<Create />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
