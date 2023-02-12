import React from 'react'
import { Route, Routes } from "react-router-dom";
import HomeBody from "../components/HomeBody";
import SignUp from "./SignUp"
import LogIn from "./LogIn"


const Homepage = () => {
  return (
    <div  className="flex flex-col   ">

      <Routes>
        <Route path="/" element={<HomeBody />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
   
      
    </div>
  )
}

export default Homepage