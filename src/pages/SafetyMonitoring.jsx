import React from 'react'
import AdminHeader from '../components/AdminHeader'
import { GoAlert } from "react-icons/go";
import { AiOutlineSafety } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";

function SafetyMonitring() {
  const safetyData = [
    {
      user: "Emily Park",
      trip: "Thailand Solo",
      lastSeen: "3 hrs ago",
      lastLocation: "Bangkok, Thailand",
      alert: "warning",
      Status: "Ping User"
    },
    {
      user: "Mike Torres",
      trip: "Safari Kenya",
      lastSeen: "6 hrs ago",
      lastLocation: "Nairobi, Kenya",
      alert: "critical",
      Status: "Send SOS"
    },
    {
      user: "Anna Schmidt",
      trip: "Iceland Trip",
      lastSeen: "2 hrs ago",
      lastLocation: "Reykjavik, Iceland",
      alert: "warning",
      Status: "Ping User"
    },
    {
      user: "Tom Baker",
      trip: "Backpack SE Asia",
      lastSeen: "12 hrs ago",
      lastLocation: "Unknown",
      alert: "critical",
      Status: "Send SOS"
    },
    {
      user: "Yuki Tanaka",
      trip: "Japan Foodie Tour",
      lastSeen: "1 hr ago",
      lastLocation: "Osaka, Japan",
      alert: "info",
      Status: "Ping User"
    },
  ];

  const safetyStats = [
    {
      title: 'Active Alerts',
      value: '5',
      change: '2 critical',
      icon: GoAlert,
    },
    {
      title: 'Users Monitored',
      value: '48',
      change: 'All active trips',
      icon: AiOutlineSafety,
    },
    {
      title: 'Check-in Rate',
      value: '87%',
      change: '+5% this week',
      icon: IoLocationOutline,
    },

  ];
  return (
    <div>
      <AdminHeader />
      <div style={{
          marginTop: "55px",
          paddingLeft: "20px",
          paddingRight: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "30px"}}>
        {/* Heading Section */}
        <div style={{
            paddingTop: "30px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"}}>
          <div style={{
              display: "flex",
              flexDirection: "column"}}>
            <p style={{
                fontWeight: "600",
                fontSize: "24px",
                margin: "0px"}}>Safety Monitoring</p>
            <p style={{
                color: "gray",
                fontSize: "13px",
                marginTop: "5px"}}>Monitor traveler safety and alerts</p>
          </div>
        </div>
        {/* Stats Cards */}
        <div style={{
            display: "flex",
            gap: "20px"}}> {safetyStats.map((item, index) => {const Icon = item.icon;
            return (
              <div key={index}style={{
                  background: "white",
                  padding: "20px",
                  display: "flex",
                  justifyContent: "space-between",
                  boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
                  borderRadius: "15px",
                  width: "100%"}}>
                {/* Left Side */}
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "5px"}}>
                  <p style={{ color: "gray", margin: "0px" }}>{item.title}</p>
                  <p style={{
                      fontWeight: "500",
                      fontSize: "24px",
                      margin: "0px"}}>{item.value}</p>
                  <p style={{
                      fontSize: "13px",
                      color: "rgb(66,139,66)",
                      margin: "0px"}}>{item.change}</p>
                </div>
                {/* Icon */}
                <div>
                  <Icon style={{
                      background: "rgba(9,48,86,0.1)",
                      color: "rgba(9,48,86,0.8)",
                      padding: "10px",
                      width: "43px",
                      height: "43px",
                      borderRadius: "20%"}}/>
                </div>
              </div>
            )
          })}
        </div>
        {/* Table Section */}
        <div style={{
            background: "white",
            padding: "20px",
            borderRadius: "15px",
            boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
            marginBottom: "30px"}}>
          {/* Header */}
          <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"}}>
            <h1 style={{
                fontSize: "16px",
                marginBottom: "10px",
                color: "gray"}}>Inactive Users & Alerts</h1>
          </div>
          {/* Table */}
          <div style={{
              marginTop: "20px",
              marginBottom: "20px"}}>
            <table style={{
                width: "100%",
                textAlign: "left",
                borderCollapse: "collapse"}}>
              {/* Table Head */}
              <thead>
                <tr style={{
                    color: "#4e4d4d"}}>
                  <th style={{
                      fontWeight: "600",
                      paddingTop: "10px",
                      paddingBottom: "10px",
                      paddingLeft: "20px"}}> User</th>
                  <th style={{ fontWeight: "600" }}>Trip</th>
                  <th style={{ fontWeight: "600" }}>Last Seen</th>
                  <th style={{ fontWeight: "600" }}>Last Location</th>
                  <th style={{ fontWeight: "600" }}>Alert Level</th>
                  <th style={{
                      fontWeight: "600",
                      textAlign: "right",
                      paddingRight: "20px"}}>Action
                  </th>
                </tr>
              </thead>
              {/* Table Body */}
              <tbody>
                {safetyData.map((item, index) => (
                  <tr key={index}style={{ borderTop: "1px solid #f3f4f6"}}>
                    {/* User */}
                    <td style={{
                        color: "#4e4d4d",
                        fontWeight: "500",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                        paddingLeft: "20px"}}>{item.user}
                    </td>
                    {/* Trip */}
                    <td style={{color: "gray"}}>{item.trip}</td>
                    {/* Last Seen */}
                    <td style={{ color: "gray"}}>{item.lastSeen}</td>
                    {/* Location */}
                    <td style={{color: "#4e4d4d"}}>
                      <div style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px"}}>
                        <IoLocationOutline />
                        {item.lastLocation}
                      </div>
                    </td>
                    {/* Alert */}
                    <td>
                      <span
                        style={{
                          fontSize: "12px",
                          paddingLeft: "5px",
                          paddingRight: "5px",
                          textAlign: "center",
                          borderRadius: "999px",
                          ...(item.alert === "warning" && {
                            color: "#ea580c",
                            background: "#ffedd5",
                            border: "1px solid #fdba74"
                          }),
                          ...(item.alert === "critical" && {
                            color: "#ef4444",
                            background: "#fee2e2",
                            border: "1px solid #fca5a5"
                          }),
                          ...(item.alert === "info" && {
                            color: "#3b82f6",
                            background: "#dbeafe",
                            border: "1px solid #93c5fd"
                          })
                        }}>{item.alert}
                      </span>
                    </td>
                    {/* Action */}
                    <td style={{
                        textAlign: "right",
                        paddingRight: "10px"}}>
                      <span
                        style={{
                          paddingLeft: "10px",
                          paddingRight: "10px",
                          paddingTop: "5px",
                          paddingBottom: "5px",
                          borderRadius: "10px",
                          color: "white",
                          ...(item.Status === "Ping User" && {
                            background: "#b87333"
                          }),
                          ...(item.Status === "Send SOS" && {
                            background: "#ef4444"
                          })
                        }}>
                        {item.Status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  )
}


export default SafetyMonitring