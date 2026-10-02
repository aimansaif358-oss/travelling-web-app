import bg from '../assets/images/bgimage.png'
import logo from '../assets/images/travel-logo.png'
import ActionButton from '../components/ActionButton'
import AdminHome from './AdminHome'
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link,useNavigate } from "react-router-dom";
import { supabase } from "../supabase";
import { setUser } from "../redux/Slices/HomeDataSlice";



function AdminLogin() {
  const [email, setEmail] = useState("Abc@gmail.com");
  const [password, setPassword] = useState("12345");
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Login = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,});
      if (error) {
        alert(error.message);
        return;
      }
      const user = data.user;
      // Email verification check
      if (!user.email_confirmed_at) {
        alert("Please verify your email before logging in.");
        await supabase.auth.signOut();
        return;
      }
      // User role
      const role = user.user_metadata?.role || "default";
      // Save user in Redux
      dispatch(
        setUser({
          id: user.id,
          email: user.email,
          role: "admin",
        }));
      // Navigate to Admin Dashboard
      navigate("/admin/dashboard");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div style={{ backgroundImage: `url(${bg})`, height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center', display: "flex", justifyContent: "center", alignItems: "center" }}>

      {/* Glass card */}
      <div style={{ padding: "40px", borderRadius: "20px", background: "rgba(10, 35, 70, 0.45)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.15)", boxShadow: "0px 8px 32px rgba(0,0,0,0.3)" }} >

        {/* Logo */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          color: "#c9c2c2",
          margin: "auto 8px",
          alignItems: "center"
        }}>
          <img src={logo} style={{ width: "40%" }} />
          <h2 style={{ color: "#c9c2c2", fontSize: "13px", fontWeight: "bold", }}>Admin Dashboard</h2>
          <div style={{ display: "flex", flexDirection: "column", }}>
            <label style={{ color: "#eee8e8", gap: "30px" }}>Email Address</label>
            <input
              style={{
                width: "350px",
                height: "40px",
                marginTop: "10px",
                borderRadius: "10px",
                caretColor: "white",
                backgroundColor: "transparent",
                outline: 0,
                border: "1px solid #c9c2c2",
                paddingLeft: "10px",
                marginBottom: "10px",
                color: "#c9c2c2"
              }}
              type="Email Addres" placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} />

            <label
              style={{ color: "#eee8e8", gap: "30px" }}>Password</label>
            <div style={{ position: "relative" }}>
              <input
                style={{
                  width: "350px",
                  height: "40px",
                  marginTop: "10px",
                  borderRadius: "10px",
                  caretColor: "white",
                  backgroundColor: "transparent",
                  outline: 0,
                  border: "1px solid #c9c2c2",
                  paddingLeft: "10px",
                  marginBottom: "40px",
                  color: "#c9c2c2",
                }}
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute",
                  right: "15px",
                  top: "35%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                  color: "#c9c2c2",
                  fontSize: "18px",
                }}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>
          <ActionButton link="/AdminHome" title="Sign In to Dashboard" bgcolor="#6C4E49" color="white" onClick={Login} />
          <p style={{ color: "white", marginTop: "20px", textAlign: "center" }}>
            Don't have an account?{" "}
            <Link
              to="/signup"
              style={{
                color: "#FFD369",
                textDecoration: "none",
                fontWeight: "bold",
              }}>
              Sign Up
            </Link>
          </p>

        </div>


      </div>


    </div>

  )
}

export default AdminLogin




