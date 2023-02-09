import React from 'react'
import { Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeBody from "../components/HomeBody";


const Homepage = () => {
  return (
    <div  className="flex flex-col   ">
        <Header />
      <Routes>
        <Route path="/" element={<HomeBody />} />
      </Routes>
      <Footer />
      
    </div>
  )
}

export default Homepage