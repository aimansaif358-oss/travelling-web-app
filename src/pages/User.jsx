import React, { useState, useEffect } from "react";
import AdminHeader from '../components/AdminHeader'
import { CiSearch } from "react-icons/ci";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiEdit2, FiEye } from "react-icons/fi";
import { supabase } from "../supabase";

function User() {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const { data, error } = await supabase.functions.invoke("getUsers", {
      method: "GET", // or POST if your function expects it
    });

    console.log("users" , data.users )

    if (error) {
      console.log(error);
    } else {
      setUsersData(data.users);
    }
  };

// deleteUser

const deleteUser = async (userId) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this user?"
  );

  if (!confirmDelete) return;

  const { data, error } = await supabase.functions.invoke("delete_user", {
    body: { userId },
  });

  if (error) {
    alert(error.message);
    return;
  }

  alert("User deleted successfully");

  fetchUsers(); // Refresh your table
};

  return (
    <div>
      <div style={{
        marginTop: "55px",
        paddingLeft: "20px",
        paddingRight: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "30px" }}>
        <div
          style={{
            paddingTop: "30px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",}}>
          {/* Left Side */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "5px"}}>
            <p style={{ fontWeight: "600", fontSize: "24px", margin: 0, }}> Users </p>
            <p style={{ color: "gray", fontSize: "13px", margin: 0 }} >Manage platform users</p>
          </div>
          {/* Right Side */}
          <div>
            <button
              style={{
                color: "#fff",
                background: "#6C4E49",
                fontSize: "13px",
                paddingTop: "5px",
                paddingBottom: "5px",
                paddingLeft: "10px",
                paddingRight: "10px",
                borderRadius: "10px",
                border: "none",
                cursor: "pointer", }}>
              Add User
            </button>
          </div>
        </div>
        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "15px",
            boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
            marginBottom: "30px" }}>
          {/* Top Section */}
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center" }}>
            <h1 style={{
              fontSize: "16px",
              marginBottom: "10px",
              color: "gray"
            }}>ALL USERS</h1>
            {/* Search Bar */}
            <div style={{
              display: "flex",
              alignItems: "center",
              background: "rgba(9, 48, 86, 0.05)",
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
                placeholder="Search Users..."
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
              marginBottom: "20px" }}>
            <table
              style={{
                width: "100%",
                textAlign: "left",
                borderCollapse: "collapse" }}>
              {/* Table Head */}
              <thead>
                <tr
                  style={{
                    color: "#4e4d4d"
                  }}>
                  <th style={{ fontWeight: "600" }}>ID</th>
                  <th
                    style={{
                      fontWeight: "600",
                      paddingTop: "10px",
                      paddingBottom: "10px",
                      paddingLeft: "20px"
                    }}>Name</th>
                  <th style={{ fontWeight: "600" }}>Email</th>
                  <th style={{ fontWeight: "600" }}>Role</th>
                  <th style={{ fontWeight: "600" }}>Joined</th>

                  <th style={{
                    fontWeight: "600",
                    textAlign: "right",
                    paddingRight: "20px"
                  }}>Actions</th>
                </tr>
              </thead>
              {/* Table Body */}
              <tbody>
                {usersData.map((item, index) => (
                  <tr
                    key={index} style={{ borderTop: "1px solid #f3f4f6" }}>
                      {/* id */}
                    <td style={{
                      color: "#4e4d4d",
                      paddingTop: "10px",
                      paddingBottom: "10px",
                      paddingLeft: "20px"
                    }}>{item.id }</td>                      
                    {/* Name */}
                    <td style={{
                      color: "#4e4d4d",
                      paddingTop: "10px",
                      paddingBottom: "10px",
                      paddingLeft: "20px"
                    }}>{item.user_metadata.full_name }</td>
                    {/* Email */}
                    <td style={{ color: "gray" }}> {item.email}</td>
                    <td>
                      <span
                        style={{
                          fontSize: "12px",
                          paddingLeft: "5px",
                          paddingRight: "5px",
                          textAlign: "center",
                          borderRadius: "999px",
                          ...(item.status === "active" && {
                            color: "#16a34a",
                            background: "#dcfce7",
                            border: "1px solid #86efac"
                          }),
                          ...(item.status === "inactive" && {
                            color: "#6b7280",
                            background: "#f3f4f6",
                            border: "1px solid #d1d5db"
                          }),
                          ...(<item className="role"></item> === "suspended" && {
                            color: "#ef4444",
                            background: "#fee2e2",
                            border: "1px solid #fca5a5"
                          })
                        }}>{item.role}
                      </span>
                    </td>
                    {/* Joined */}
                    <td
                      style={{
                        color: "gray"
                      }}>{new Date(item.created_at).toLocaleDateString()}</td>
                    {/* Actions */}
                    <td style={{
                      paddingTop: "10px",
                      paddingBottom: "10px",
                      paddingRight: "20px"}}>
                      <div style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        gap: "5px"}}>
                        {/* <FiEye style={{
                          width: "14px",
                          height: "20px",
                          padding: "8px",
                          borderRadius: "13px",
                          cursor: "pointer"
                        }} /> */}
                        {/* <FiEdit2 style={{
                          width: "14px",
                          height: "20px",
                          padding: "8px",
                          borderRadius: "13px",
                          cursor: "pointer"
                        }} /> */}
                        <RiDeleteBinLine
                         onClick={() => deleteUser(item.id)}
                          style={{
                            color: "#EF4444",
                            width: "14px",
                            height: "20px",
                            padding: "8px",
                            borderRadius: "13px",
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
      <AdminHeader />
    </div>
  )
}

export default User