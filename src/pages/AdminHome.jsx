import React from 'react'
import { Link, Navigate, Route, Routes, NavLink } from 'react-router-dom';

import icon from '../assets/images/icon-logo.png'
import logo from '../assets/images/travel-logo.png'

import { RiDashboardLine } from "react-icons/ri";
import { LuUsersRound } from "react-icons/lu";
import { MdCardTravel, MdOutlineGroups, MdAttachMoney } from "react-icons/md";
import { GoShield } from "react-icons/go";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaRegChartBar } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";

import Dashboard from './Dashboard';
import User from './User';
import Trips from './Trips';
import Groups from './Groups';
import Expenses from './Expenses';
import SafetyMonitoring from './SafetyMonitoring';
import Notifications from './Notification';
import Reports from './Reports';
import Settings from './Settings';

function AdminHome() {
  const menuItems = [
    {
      name: 'Dashboard',
      path: 'Dashboard',
      icon: <RiDashboardLine />
    },
    {
      name: "User",
      path: "User",
      icon: <LuUsersRound />
    },
    {
      name: "Trips",
      path: "Trips",
      icon: <MdCardTravel />
    },
    {
      name: "Groups",
      path: "Groups",
      icon: <MdOutlineGroups />
    },
    {
      name: "Expenses",
      path: "Expenses",
      icon: <MdAttachMoney />
    },
    {
      name: "Safety Monitoring",
      path: "SafetyMonitoring",
      icon: <GoShield />
    },
    {
      name: "Notifications",
      path: "Notifications",
      icon: <IoIosNotificationsOutline />
    },
    {
      name: "Reports",
      path: "Reports",
      icon: <FaRegChartBar />
    },
    {
      name: "Settings",
      path: "Settings",
      icon: <IoSettingsOutline />
    },
  ]
  return (
    <div style={{
      display: "flex",
      minHeight: "100vh",
      background: "#f4f7fb",
    }}>
      {/* sidebar */}
      <div style={{
        backgroundColor: "#093056", width: "200px", display: "flex",
        flexDirection: "column",
        position: "fixed",
        top: "0",
        left: "0",
        height: "100vh",
        overflowY: "auto"
      }}>

        <div style={{
          display: "flex",
          paddingTop: "20px",
          paddingBottom: "20px",
          alignItems: "center",
          flexDirection: "column",
          gap: 15
        }}>
          <div style={{ alignItems: "center", display: "flex" }}>
            <img src={icon} alt="icon" style={{
              width: "40px",
              height: "40px",
              marginRight: "8px",
              background: "white",
              borderRadius: "20px",
              padding: "5px",
            }} />
            <img src={logo} alt='logo' style={{ width: "100px" }} />
          </div>
          {/* separation line */}
          <div style={{ width: "100%", height: "1px", background: "#c9c2c2", }}>
            {/* menu links */}
            <div style={{
              paddingLeft: "10px",
              paddingRight: "10px",
              display: "flex",
              flexDirection: "column",
              paddingTop: "15px",
              paddingBottom: "15px",
              gap: "5px",
            }}>
              {menuItems.map((item, index) => (
                <NavLink
                  key={index} to={`/AdminHome/${item.path}`}

                  style={({ isActive }) => ({
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: "4px",
                    paddingRight: "4px",
                    textDecoration: "none",
                    paddingTop: "4px",
                    paddingBottom: "4px",
                    borderRadius: "6px",
                    cursor: "pointer",
                    color: isActive ? "white" : "#c9c2c2",
                    background: isActive ? "rgba(201,194,194,0.2)" : "transparent",
                  })} >
                  <span
                    style={{
                      marginRight: "12px",}}>
                    {item.icon}
                  </span>
                  {item.name}

                </NavLink>))}
            </div>
          </div>

        </div>
      </div>
      <div style={{flex: 1, marginLeft: "200px", background: "rgba(9, 48, 86, 0.03)", minHeight: "100vh",}}>
        <Routes>
          <Route path='/' element={<Navigate to={'/AdminHome/Dashboard'} />} />
          <Route path='Dashboard' element={<Dashboard />} />
          <Route path='User' element={<User />} />
          <Route path='Trips' element={<Trips />} />
          <Route path='Groups' element={<Groups />} />
          <Route path='Expenses' element={<Expenses />} />
          <Route path='SafetyMonitoring' element={<SafetyMonitoring />} />
          <Route path='Notifications' element={<Notifications />} />
          <Route path='Reports' element={<Reports />} />
          <Route path='Settings' element={<Settings />} />
        </Routes>
      </div>



    </div>



  )
}


export default AdminHome