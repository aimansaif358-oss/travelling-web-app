import React, { useState } from "react";
import bg from "../assets/images/bgimage.png";
import logo from "../assets/images/travel-logo.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import ActionButton from "../components/ActionButton";
import { useDispatch } from "react-redux";
import { supabase } from "../supabase";
import { setUser } from "../redux/Slices/HomeDataSlice";


function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const dispatch = useDispatch();


  const signUp = async () => {
    try {
      // Check empty fields
      if (!name || !email || !password || !confirmPassword) {
        alert("Please fill all fields");
        return;
      }

      // Check password match
      if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
      }

      // Signup with Supabase
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: name,
            role: "admin",
          },
          emailRedirectTo: "http://localhost:3000",
        },
      });

      if (error) {
        throw error;
      }

      const user = data.user;

      if (!user) {
        throw new Error("User was not created");
      }
      // Save Admin in profiles table
      const { error: profileError } = await supabase
        .from("profiles")
        .insert([
          {
            id: user.id,
            full_name: name,
            email: email,
            role: "admin",
          },
        ]);

      if (profileError) {
        console.log("Profile Error:", profileError.message);
      }

      const reduxUser = {
        id: user.id,
        email: user.email,
        full_name: user.user_metadata?.full_name,
        role: "admin",
      };

      // dispatch(setUser(reduxUser));

      console.log("User Saved:", reduxUser);

      alert("Account created successfully!\nPlease verify your email before login.");

      // Clear Form
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");

    } catch (error) {
      console.log("Signup Error:", error.message);
      alert(error.message);
    }
  };



  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <div
        style={{
          padding: "40px",
          borderRadius: "20px",
          background: "rgba(10, 35, 70, 0.45)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.15)",
          boxShadow: "0px 8px 32px rgba(0,0,0,0.3)",
        }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
          <img src={logo} style={{ width: "40%" }} />
          <h2
            style={{
              color: "#c9c2c2",
              fontSize: "14px",
              marginBottom: "20px",
            }}>
            Create Admin Account
          </h2>
          {/* Full Name */}
          <label style={{ color: "white", alignSelf: "flex-start" }}>
            Full Name
          </label>
          <input
            type="text"
            placeholder="Enter Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyle} />

          {/* Email */}
          <label style={{ color: "white", alignSelf: "flex-start" }}>
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle} />
          {/* Password */}
          <label style={{ color: "white", alignSelf: "flex-start" }}>
            Password
          </label>
          <div style={{ position: "relative", width: "350px" }}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={inputStyle} />

            <span
              onClick={() => setShowPassword(!showPassword)}
              style={eyeStyle}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          {/* Confirm Password */}
          <label
            style={{
              color: "white",
              alignSelf: "flex-start",
              marginTop: "15px",
            }}>
            Confirm Password
          </label>
          <div style={{ position: "relative", width: "350px" }}>
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={inputStyle} />
            <span
              onClick={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
              style={eyeStyle}>
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <div style={{ marginTop: "25px", width: "100%" }}>
            <ActionButton
              title="Create Account"
              bgcolor="#6C4E49"
              color="white"
              onClick={signUp} />

          </div>
          <p
            style={{
              color: "white",
              marginTop: "20px",
            }}>
            Already have an account?{" "}
            <Link
              to="/"
              style={{
                color: "#FFD369",
                textDecoration: "none",
                fontWeight: "bold",
              }}>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}




const inputStyle = {
  width: "350px",
  height: "40px",
  marginTop: "10px",
  borderRadius: "10px",
  border: "1px solid #c9c2c2",
  backgroundColor: "transparent",
  color: "#c9c2c2",
  paddingLeft: "10px",
  paddingRight: "40px",
  outline: "none",
  boxSizing: "border-box",
};

const eyeStyle = {
  position: "absolute",
  right: "15px",
  top: "65%",
  transform: "translateY(-50%)",
  cursor: "pointer",
  color: "#c9c2c2",
};

export default Signup;