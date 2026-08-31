import React, { useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import { IoSettingsOutline } from "react-icons/io5";


function Settings() {
  const [email, setEmail] = useState(true);
  const [safety, setSafety] = useState(true);
  const [weekly, setWeekly] = useState(false);
  return (
    <div>
      <AdminHeader />
      <div
        style={{
          marginTop: "55px",
          paddingLeft: "20px",
          paddingRight: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "30px"}}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            paddingTop: "30px"}}>
          <IoSettingsOutline
            style={{
              background: "rgba(9,48,86,0.1)",
              color: "rgba(9,48,86,0.8)",
              padding: "10px",
              width: "42px",
              height: "42px",
              borderRadius: "25%"}}/>
          <h1 style={{
              fontWeight: "600",
              fontSize: "24px",
              margin: 0}}>Settings</h1>
        </div>

        <div
          style={{
            background: "white",
            width: "50%",
            padding: "30px",
            borderRadius: "15px",
            boxShadow: "0px 2px 10px rgba(0,0,0,0.1)"}}>
          <div>
            <h1
              style={{
                fontSize: "16px",
                marginBottom: "10px",
                color: "gray"}}>General Settings</h1>
          </div>

          <div style={{ marginTop: "20px" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px"}}>
              <label>Platform Name</label>

              <input
                type="text"
                style={{
                  border: "2px solid #ccc",
                  borderRadius: "10px",
                  padding: "10px 20px",
                  outline: "none"}}/>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                marginTop: "20px"}}>
              <label>Admin Email</label>

              <input
                type="email"
                style={{
                  border: "2px solid #ccc",
                  borderRadius: "10px",
                  padding: "10px 20px",
                  outline: "none"}}/>
            </div>
          </div>
        </div>

        <div
          style={{
            background: "white",
            width: "50%",
            padding: "30px",
            borderRadius: "15px",
            boxShadow: "0px 2px 10px rgba(0,0,0,0.1)"}}>
          <div>
            <h1
              style={{
                fontSize: "16px",
                marginBottom: "10px",
                color: "gray"}}>NOTIFICATIONS</h1>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              marginTop: "20px"}}>
            {/* Email Notification */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"}}>
              <h4>Email Notifications</h4>

              <div
                onClick={() => setEmail(!email)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "48px",
                  height: "24px",
                  borderRadius: "999px",
                  cursor: "pointer",
                  transition: "0.5s",
                  background: email ? "#093056" : "#d1d5db"}}>
                <span
                  style={{
                    background: "white",
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    marginLeft: email ? "26px" : "3px",
                    transition: "0.5s"
                  }}/>
              </div>
            </div>

            {/* Safety Alerts */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}>
              <h4>Safety Alert Notifications</h4>

              <div
                onClick={() => setSafety(!safety)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "48px",
                  height: "24px",
                  borderRadius: "999px",
                  cursor: "pointer",
                  transition: "0.5s",
                  background: safety ? "#093056" : "#d1d5db"}}>
                <span
                  style={{
                    background: "white",
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    marginLeft: safety ? "26px" : "3px",
                    transition: "0.5s"
                  }}/>
              </div>
            </div>

            {/* Weekly Reports */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"}}>
              <h4>Weekly Report Summary</h4>

              <div
                onClick={() => setWeekly(!weekly)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "48px",
                  height: "24px",
                  borderRadius: "999px",
                  cursor: "pointer",
                  transition: "0.5s",
                  background: weekly ? "#093056" : "#d1d5db"}}>
                <span
                  style={{
                    background: "white",
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    marginLeft: weekly ? "26px" : "3px",
                    transition: "0.5s"}}/>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Settings