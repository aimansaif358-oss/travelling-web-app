import React from 'react'
import AdminHeader from '../components/AdminHeader'
import { CiSearch } from "react-icons/ci";

function Expenses() {
  const groupsData = [
    {
      discription: "Hotel Booking - Bali",
      trip: "Bali Adventure",
      user: "Sarah Chen",
      category: "Accommodation",
      Amount: "$450.00",
      date: "Mar 10"
    },
    {
      discription: "Flight Tickets",
      trip: "Euro Backpacking",
      user: "James Miller",
      category: "Transport",
      Amount: "$1,200.00",
      date: "Apr 26"
    },
    {
      discription: "Group Dinner",
      trip: "Tokyo Exploration",
      user: "Lisa Wang",
      category: "Food",
      Amount: "$245.00",
      date: "Apr 8"
    },
    {
      discription: "Safari Tour",
      trip: "Safari kenya",
      user: "David Kim",
      category: "Activity",
      Amount: "$380.00",
      date: "Feb 22"
    },
    {
      discription: "Travel Insurance",
      trip: "IceLand Northern Lights",
      user: "Alex Jhonson",
      category: "Insurance",
      Amount: "$120.00",
      date: "Apr 15"
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
            alignItems: "center"}}>
          <div style={{
              display: "flex",
              flexDirection: "column"}}>
            <p style={{
                fontWeight: "600",
                fontSize: "24px",
                margin:"0",
                gap:"5px"}}>Expenses</p>
            <p style={{
                color: "gray",
                fontSize: "13px",
                marginTop: "3px"}}>Track Trip Expenses and Payments</p>
          </div>
        </div>
        {/* Main Card */}
        <div style={{
            background: "white",
            padding: "20px",
            borderRadius: "15px",
            boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
            marginBottom: "30px"}}>
          {/* Header */}
          <div style={{
              display: "flex",
              alignItems: "center"}}>
            <h1 style={{
                fontSize: "16px",
                marginBottom: "10px",
                color: "gray"}}>RECENT EXPENSES</h1>
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
                <tr style={{ color: "#4e4d4d"}}>
                  <th style={{
                      fontWeight: "600",
                      paddingTop: "10px",
                      paddingBottom: "10px",
                      paddingLeft: "20px"}}>Description</th>
                  <th style={{ fontWeight: "600" }}>Trip</th>
                  <th style={{ fontWeight: "600" }}>User</th>
                  <th style={{ fontWeight: "600" }}>Category</th>
                  <th style={{ fontWeight: "600" }}>Amount</th>
                  <th style={{ fontWeight: "600" }}>Date</th>
                </tr>
              </thead>
              {/* Table Body */}
              <tbody>
                {groupsData.map((item, index) => (
                  <tr key={index}style={{
                      borderTop: "1px solid #f3f4f6"}}>
                    {/* Description */}
                    <td style={{
                        color: "#4e4d4d",
                        fontWeight: "500",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                        paddingLeft: "20px"}}>{item.discription}
                    </td>
                    {/* Trip */}
                    <td style={{color: "gray"}}>{item.trip}</td>
                    {/* User */}
                    <td style={{color: "gray"}}> {item.user}</td>
                    {/* Category */}
                    <td>
                      <span style={{
                          fontSize: "12px",
                          paddingLeft: "5px",
                          paddingRight: "5px",
                          textAlign: "center",
                          borderRadius: "999px",
                          ...(item.category === "Accommodation" && {
                            color: "#4b5563",
                            background: "#f3f4f6",
                            border: "1px solid #d1d5db"
                          }),
                          ...(item.category === "Transport" && {
                            color: "#3b82f6",
                            background: "#dbeafe",
                            border: "1px solid #93c5fd"
                          }),
                          ...(item.category === "Food" && {
                            color: "#16a34a",
                            background: "#dcfce7",
                            border: "1px solid #86efac"
                          }),
                          ...(item.category === "Activity" && {
                            color: "#1c1917",
                            background: "#d6d3d1",
                            border: "1px solid #a8a29e"
                          }),
                          ...(item.category === "Insurance" && {
                            color: "#4b5563",
                            background: "#f3f4f6",
                            border: "1px solid #d1d5db"
                          })
                        }}>{item.category}
                      </span>
                    </td>
                    {/* Amount */}
                    <td style={{
                        color: "#4e4d4d",
                        fontWeight: "500"}}> {item.Amount}</td>
                    {/* Date */}
                    <td style={{
                        color: "gray"}}>{item.date}
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

export default Expenses