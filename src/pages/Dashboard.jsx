import React from 'react'
import AdminHeader from '../components/AdminHeader'
import { LuUsersRound } from "react-icons/lu";
import { MdCardTravel, MdOutlineGroups } from "react-icons/md";
import { FaArrowTrendUp } from "react-icons/fa6";
import { ResponsiveContainer, BarChart, YAxis, XAxis, Tooltip, Bar, CartesianGrid, Line, LineChart, AreaChart, Area } from 'recharts';

function Dashboard() {
  const dashboardStats = [
    {
      title: 'Total Users',
      value: '1,280',
      change: '+12.5% from last month',
      icon: LuUsersRound,
    },
    {
      title: 'Active Trips',
      value: '48',
      change: '+8 new this week',
      icon: MdCardTravel,
    },
    {
      title: 'Travel Groups',
      value: '156',
      change: '+3.2% from last month',
      icon: MdOutlineGroups,
    },
    {
      title: 'Revenue',
      value: '$24,500',
      change: '+18% from last month',
      icon: FaArrowTrendUp,
    },
  ]
  const tripData = [
    { name: "Jan", trips: 65 },
    { name: "Feb", trips: 80 },
    { name: "Mar", trips: 110 },
    { name: "Apr", trips: 95 },
    { name: "May", trips: 130 },
    { name: "Jun", trips: 150 },
  ]

  const userGrowthData = [
    { name: "Jan", users: 420 },
    { name: "Feb", users: 580 },
    { name: "Mar", users: 720 },
    { name: "Apr", users: 890 },
    { name: "May", users: 1050 },
    { name: "Jun", users: 1280 }
  ]
   const Activities = [{
    initials: 'SC',
    name: 'Sarah Chen',
    action: 'Created trip to Bali',
    tag: 'Trip',
    time: '2 min ago'
  },
  {
    initials: 'JM',
    name: 'James Miller',
    action: "Joined group 'Euro Backpackers'",
    tag: 'Group',
    time: '15 min ago'
  },
  {
    initials: 'EP',
    name: 'Emily Park',
    action: "Added expense $245.00",
    tag: 'Expense',
    time: '32 min ago'
  },
  {
    initials: 'DK',
    name: 'David Kim',
    action: "Safety alert triggered",
    tag: 'Alert',
    time: '1 hr ago'
  },
  {
    initials: 'LW',
    name: 'Lisa Wang',
    action: "Completed trip to Tokyo",
    tag: 'Trip',
    time: '2 hr ago'
  },

]

const tagStyle = {
  Trip: {
    background: "#dbeafe",
    color: "#1d4ed8",
    border: "1px solid #1d4ed8",
  },

  Group: {
    background: "#dcfce7",
    color: "#15803d",
    border: "1px solid #15803d",
  },

  Expense: {
    background: "#ffedd5",
    color: "#ea580c",
    border: "1px solid #ea580c",
  },

  Alert: {
    background: "#fee2e2",
    color: "#dc2626",
    border: "1px solid #dc2626",
  },
  
}
  return (
    <div>
      <AdminHeader />
      <div style={{
        marginTop: "55px",
        paddingLeft: "20px",
        paddingRight: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "10px"
      }}>
        <div style={{
          display: "flex",
          flexDirection: "column",
          paddingTop: "30px"
        }}>
          <p style={{ fontWeight: "600", fontSize: "24px", margin: "0px" }}> Dashboard</p>
          <p style={{ color: "gray", fontSize: "13px", }}> Overview of your travel management platform</p>
        </div>

        <div
          style={{
            display: "flex",
            gap: "20px"
          }}>
          {dashboardStats.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                style={{
                  background: "white",
                  padding: "20px",
                  display: "flex",
                  justifyContent: "space-between",
                  boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
                  borderRadius: "15px",
                  width: "100%"
                }}>

                {/* Left Side */}

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 5
                  }} >

                  <p style={{ color: "gray", margin: 0 }} > {item.title} </p>
                  <p style={{ fontWeight: "600", fontSize: "24px", margin: 0 }}>{item.value}</p>
                  <p style={{ fontSize: "13px", color: "rgb(66, 139, 66)", margin: 0 }}>{item.change}</p>
                </div>


                {/* Right Side Icon */}

                <div>

                  <Icon
                    style={{
                      background: "rgba(9, 48, 86, 0.1)",
                      color: "rgba(9, 48, 86, 0.8)",
                      padding: "10px",
                      width: "43px",
                      height: "43px",
                      borderRadius: "20%"
                    }}/>
                </div>
              </div>
            );
          })}
        </div>
        <div
          style={{
            display: "flex",
            gap: "20px",
            width: "100%",
            alignItems: "stretch",
          }}>

          {/* Trips Overview */}

          <div
            style={{
              width: "100%",
              height: "300px",
              background: "white",
              padding: "20px",
              paddingBottom: "40px",
              color: "gray",
              fontSize: "13px",
              overflow: "hidden",
              borderRadius: "15px",
              boxShadow: "0px 2px 10px rgba(0,0,0,0.1)"
            }}>
            <h1 style={{ fontSize: "16px", marginBottom: "10px" }}> Trips Overview </h1>
            <ResponsiveContainer
              width="100%"
              height="100%">

              <BarChart data={tripData}>

                <CartesianGrid
                  vertical={false}
                  strokeDasharray="3" />

                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#999b9e" }} />

                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#999b9e" }} />

                <Tooltip
                  itemStyle={{ color: "#999b9e" }}
                  contentStyle={{ borderRadius: "8px" }} />

                <defs>

                  <linearGradient
                    id="tripGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1">

                    <stop
                      offset="0%"
                      stopColor="#114a83" />

                    <stop
                      offset="100%"
                      stopColor="#819dbb" />
                  </linearGradient>
                </defs>

                <Bar
                  dataKey="trips"
                  radius={[6, 6, 0, 0]}
                  fill="url(#tripGradient)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          {/* User Growth */}
          <div
            style={{
              width: "100%",
              height: "300px",
              background: "white",
              padding: "20px",
              paddingBottom: "40px",
              color: "gray",
              fontSize: "13px",
              borderRadius: "15px",
              boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
              border: "none"
            }}>
            <h1 style={{ fontSize: "16px", marginBottom: "10px", }}>User Growth</h1>
            <ResponsiveContainer
              width={"100%"}
              height={"100%"}>
              <AreaChart data={userGrowthData}>
                <CartesianGrid
                  vertical={false}
                  strokeDasharray="3" />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#999b9e" }} />

                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#999b9e" }} />

                <Tooltip
                  itemStyle={{ color: "#999b9e" }}
                  contentStyle={{ borderRadius: "8px" }} />
                <defs>
                  <linearGradient
                    id="userGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1" >

                    <stop
                      offset="0%"
                      stopColor="#114a83"
                      stopOpacity={0.4} />

                    <stop
                      offset="100%"
                      stopColor="#819dbb"
                      stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area
                  dataKey="users"
                  fill="url(#userGradient)"
                  type={"monotone"}
                  dot={{
                    r: 3,
                    fill: "#fff",
                  }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "15px",
            boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
            marginBottom: "30px",
          }}>

          <h1
            style={{
              fontSize: "16px",
              marginBottom: "10px",
              color: "gray",
            }}>
            Recent Activity
          </h1>

          <div>

            {Activities.map((item, index) => (

              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingTop: "8px",
                  paddingBottom: "8px",
                  paddingLeft: "15px",
                  paddingRight: "15px",
                  cursor: "pointer",
                  borderRadius: "10px",
                  transition: "0.2s"}}>

                {/* Left Side */}

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "15px"}}>

                  {/* Initials */}

                  <div
                    style={{
                      background: "rgba(9, 48, 86, 0.1)",
                      color: "rgba(9, 48, 86, 0.8)",
                      padding: "10px",
                      fontSize: "13px",
                      fontWeight: "500",
                      borderRadius: "30%"}}>
                    {item.initials}
                  </div>


                  {/* Name + Action */}

                  <div>

                    <p
                      style={{
                        color: "#000",
                        fontWeight: "500",
                        fontSize: "14px",
                         margin: 0}}>{item.name}</p>

                    <p
                      style={{
                        fontSize: "12px",
                        color: "gray",
                        margin:0}}>{item.action}</p>

                  </div>

                </div>


                {/* Right Side */}

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8px" }}>

                  <p
                    style={{
                      borderRadius: "999px",
                      paddingLeft: "8px",
                      paddingRight: "8px",
                      fontSize: "10px",
                      margin:0,
                      ...(tagStyle[item.tag] || {}),}}>{item.tag}</p>

                  <p style={{
                      fontSize: "10px",
                      color: "gray",
                      margin:0}}>{item.time}</p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>
    </div>

  )
}

export default Dashboard