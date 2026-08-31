import React from 'react'
import AdminHeader from '../components/AdminHeader'
import { CiSearch } from "react-icons/ci";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiEdit2, FiEye } from "react-icons/fi";

function Groups() {
  const groupsData = [
    {
      groupName: "Euro Backpackers",
      members: 24,
      trips: 5,
      status: "active",
      created: "Jan 2025"
    },
    {
      groupName: "Asia Explorers",
      members: 18,
      trips: 3,
      status: "active",
      created: "Feb 2025"
    },
    {
      groupName: "Solo Travelers Club",
      members: 42,
      trips: 8,
      status: "active",
      created: "Dec 2024"
    },
    {
      groupName: "Budget Wanderers",
      members: 15,
      trips: 2,
      status: "inactive",
      created: "Mar 2025"
    },
    {
      groupName: "Adventure Seekers",
      members: 30,
      trips: 6,
      status: "active",
      created: "Nov 2024"
    },
  ];
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
          gap: "30px"
        }}>
        <div style={{
          paddingTop: "30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          {/* Left Side */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap:"5px"
          }}>
            <p style={{
              fontWeight: "600",
              fontSize: "24px",
              margin: "0px"
            }}>Groups</p>
            <p style={{
              color: "gray",
              fontSize: "13px",
              margin: "0px"
            }}>Manage travel groups</p>
          </div>
          {/* Right Side Button */}
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
              cursor: "pointer"
            }}>Create Group
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
          <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"}}>
            <h1 style={{
                fontSize: "16px",
                marginBottom: "10px",
                color: "gray"}}>All Groups</h1>
            {/* Search Box */}
            <div style={{
                display: "flex",
                alignItems: "center",
                background: "rgba(9,48,86,0.05)",
                borderRadius: "10px",
                paddingTop: "5px",
                paddingBottom: "5px",
                paddingLeft: "10px",
                paddingRight: "10px"}}>
              <CiSearch
                style={{
                  marginRight: "10px",
                  color: "gray"}}/>
              <input
                type="text"
                placeholder="Search Users..."
                style={{
                  outline: "none",
                  border: "none",
                  background: "transparent",
                  color: "gray"}}/>
            </div>
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
                <tr style={{color: "#4e4d4d"}}>
                  <th
                    style={{
                      fontWeight: "600",
                      paddingTop: "10px",
                      paddingBottom: "10px",
                      paddingLeft: "20px"}}>Group Name
                  </th>
                  <th style={{ fontWeight: "600" }}>Members</th>
                  <th style={{ fontWeight: "600" }}>Trips</th>
                  <th style={{ fontWeight: "600" }}>Created</th>
                  <th style={{ fontWeight: "600" }}>Status</th>
                  <th style={{
                      fontWeight: "600",
                      textAlign: "right",
                      paddingRight: "20px"}}>Actions</th>
                </tr>
              </thead>
              {/* Table Body */}
              <tbody>
                {groupsData.map((item, index) => (
                  <tr
                    key={index}
                    style={{
                      borderTop: "1px solid #f3f4f6"}}>
                    {/* Group Name */}
                    <td style={{
                        color: "#4e4d4d",
                        fontWeight: "500",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                        paddingLeft: "20px"}}>{item.groupName}
                    </td>
                    {/* Members */}
                    <td
                      style={{
                      color: "#4e4d4d",
                      fontWeight: "500"}}>{item.members}</td>
                    {/* Trips */}
                    <td style={{
                        color: "#4e4d4d",
                        fontWeight: "500"}}>{item.trips}
                    </td>
                    {/* Created */}
                    <td
                      style={{
                        color: "gray"}}>{item.created}
                    </td>
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
                          ...(item.status === "inactive" && {
                            color: "gray",
                            background: "#f3f4f6",
                            border: "1px solid #d1d5db"
                          })
                        }}>{item.status}
                      </span>
                    </td>
                    {/* Actions */}
                    <td
                      style={{
                        paddingTop: "10px",
                        paddingBottom: "10px",
                        paddingRight: "20px"
                      }}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                          alignItems: "center",
                          gap: "5px"}}>
                        <FiEye
                          style={{
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
                            cursor: "pointer"
                          }}/>
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

export default Groups