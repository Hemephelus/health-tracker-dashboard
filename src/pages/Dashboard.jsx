import React from 'react'
import { Route, Routes } from "react-router-dom";
import SideBar from '../components/dashboard-components/SideBar'
import Profile from '../components/dashboard-components/Profile'
import Home from '../components/dashboard-components/dashboard-pages/Home'
import Stats from '../components/dashboard-components/dashboard-pages/Stats'
import Friends from '../components/dashboard-components/dashboard-pages/Friends'
import Notifications from '../components/dashboard-components/dashboard-pages/Notifications'

const Dashboard = () => {
  return (
    <div>
          <SideBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/notifications" element={<Notifications />} />
      </Routes>
      <Profile />
    </div>
  )
}

export default Dashboard