import React from 'react'
import AdminHeader from '../components/AdminHeader'
import { CiSearch } from "react-icons/ci";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiEdit2, FiEye } from "react-icons/fi";


function Trips() {
  const tripsData = [
    {
      tripName: "Bali Adventure",
      organizer: "Sarah Chen",
      members: 6,
      dates: "Mar 10 - Mar 20",
      status: "active",
    },
    {
      tripName: "Tokyo Exploration",
      organizer: "Lisa Wang",
      members: 4,
      status: "completed",
      dates: "Apr 5 - Apr 15"
    },
    {
      tripName: "Euro Backpacking",
      organizer: "James Miller",
      members: 8,
      status: "upcoming",
      dates: "May 1 - Jun 1"
    },
    {
      tripName: "Safari Kenya",
      organizer: "David Kim",
      members: 5,
      status: "completed",
      dates: "Feb 20 - Mar 2"
    },
    {
      tripName: "Iceland Northern Lights",
      organizer: "Alex Johnson",
      members: 3,
      status: "upcoming",
      dates: "Apr 20 - Apr 28"
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
        gap: "30px" }}>
        <div style={{
            paddingTop: "30px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"}}>
          {/* Left Side */}
          <div
            style={{display: "flex",
              flexDirection: "column"}}>
            <p style={{
                fontWeight: "600",
                fontSize: "24px",
                margin: "0px",
                gap:0}}>Trips</p>
            <p style={{
                color: "gray",
                fontSize: "13px",
                margin: "0px"}}>Monitor and manage all trips</p>
          </div>
          {/* Button */}
          <div>
            <button style={{
                color: "#fff",
                background: "#6C4E49",
                fontSize: "13px",
                paddingTop: "5px",
                paddingBottom: "5px",
                paddingLeft: "10px",
                paddingRight: "10px",
                borderRadius: "10px",
                border: "none",
                cursor: "pointer"}}>Create Trip
            </button>
          </div>
        </div>

        <div style={{
            background: "white",
            padding: "20px",
            borderRadius: "15px",
            boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
            marginBottom: "30px"}}>
          {/* Header */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}>
            <h1 style={{
                fontSize: "16px",
                marginBottom: "10px",
                color: "gray"}}>ALL TRIPS</h1>
            {/* Search Box */}
            <div style={{
                display: "flex",
                alignItems: "center",
                background: "rgba(9,48,86,0.05)",
                borderRadius: "10px",
                paddingTop: "5px",
                paddingBottom: "5px",
                paddingLeft: "10px",
                paddingRight: "10px" }}>
              <CiSearch
                style={{
                  marginRight: "10px",
                  color: "gray"}}/>
              <input
                type="text"
                placeholder="Search Trips..."
                style={{
                  outline: "none",
                  border: "none",
                  background: "transparent",
                  color: "gray"}}/>
            </div>
          </div>
          {/* Table */}
          <div
            style={{
              marginTop: "20px",
              marginBottom: "20px"}}>
            <table
              style={{
                width: "100%",
                textAlign: "left",
                borderCollapse: "collapse" }}>
              {/* Table Head */}
              <thead>
                <tr
                  style={{
                    color: "#4e4d4d"}}>
                  <th style={{
                      fontWeight: "600",
                      paddingTop: "10px",
                      paddingBottom: "10px",
                      paddingLeft: "20px"}}>Trip Name</th>
                  <th style={{ fontWeight: "600" }}>Organizer</th>
                  <th style={{ fontWeight: "600" }}>Members</th>
                  <th style={{ fontWeight: "600" }}>Dates</th>
                  <th style={{ fontWeight: "600" }}>Status</th>
                  <th style={{
                      fontWeight: "600",
                      textAlign: "right",
                      paddingRight: "20px"}}>Actions</th>
                </tr>
              </thead>
              {/* Table Body */}
              <tbody>
                {tripsData.map((item, index) => (
                  <tr
                    key={index}
                    style={{
                      borderTop: "1px solid #f3f4f6"}}>
                    {/* Trip Name */}
                    <td style={{
                        color: "#4e4d4d",
                        fontWeight: "500",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                        paddingLeft: "20px"}}>{item.tripName}
                    </td>
                    {/* Organizer */}
                    <td
                      style={{
                        color: "gray",
                        fontWeight: "500"}}>{item.organizer}
                    </td>
                    {/* Members */}
                    <td
                      style={{
                        color: "#4e4d4d",
                        fontWeight: "500"}}>{item.members}</td>
                    {/* Dates */}
                    <td
                      style={{
                        color: "gray"}}>{item.dates}</td>
                    {/* Status */}
                    <td>
                      <span style={{
                          fontSize: "12px",
                          paddingLeft: "5px",
                          paddingRight: "5px",
                          textAlign: "center",
                          borderRadius: "999px",
                          ...(item.status === "active" && {
                            color: "green",
                            background: "#dcfce7",
                            border: "1px solid #86efac"
                          }),
                          ...(item.status === "completed" && {
                            color: "#2563eb",
                            background: "#dbeafe",
                            border: "1px solid #93c5fd"
                          }),
                          ...(item.status === "upcoming" && {
                            color: "#ea580c",
                            background: "#ffedd5",
                            border: "1px solid #fdba74"
                          })
                        }}>{item.status}
                      </span>
                    </td>
                    {/* Actions */}
                    <td
                      style={{
                        paddingTop: "10px",
                        paddingBottom: "10px",
                        paddingRight: "20px"}}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                          alignItems: "center",
                          gap: "5px"}}>
                        <FiEye style={{
                            width: "15px",
                            height: "20px",
                            padding: "8px",
                            borderRadius: "13px",
                            cursor: "pointer"}}/>
                        <FiEdit2
                          style={{
                            width: "15px",
                            height: "20px",
                            padding: "8px",
                            borderRadius: "13px",
                            cursor: "pointer"}}/>
                        <RiDeleteBinLine
                          style={{
                            width: "15px",
                            height: "20px",
                            padding: "8px",
                            borderRadius: "13px",
                            color: "#EF4444",
                            cursor: "pointer"}}/>
                      </div>
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

export default Trips