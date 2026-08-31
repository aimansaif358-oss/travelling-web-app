import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";

function AdminHeader() {
    return (

        <div
            style={{
                background: "white",
                position: "fixed",
                top: "0",
                right: "0",
                left: "200px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                zIndex: "50",
                paddingLeft: "20px",
                paddingRight: "20px",
                paddingTop: "10px",
                paddingBottom: "10px",
                boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
            }}>

            {/* Search Bar */}

            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    background: "rgba(9, 48, 86, 0.05)",
                    borderRadius: "10px",
                    paddingTop: "5px",
                    paddingBottom: "5px",
                    paddingLeft: "10px",
                    paddingRight: "10px",
                }}>

                <CiSearch
                    style={{
                        marginRight: "10px",
                        color: "gray",}}/>

                <input
                    type='text'
                    placeholder='Search Anything...'

                    style={{
                        outline: "none",
                        border: "none",
                        background: "transparent",
                        color: "gray",
                    }}/>

            </div>


            {/* Right Side */}

            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                }}>

                <IoIosNotificationsOutline
                    style={{
                        fontSize: "20px",
                    }}/>

                <span
                    style={{
                        background: "#6C4E49",
                        borderRadius: "50%",
                        color: "white",
                        padding: "6px",
                    }}>
                    AD
                </span>

            </div>

        </div>
    )
}

export default AdminHeader