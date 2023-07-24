import React from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCalendarAlt,
  FaShoppingBasket,
  FaHeart,
  FaCreditCard,
} from "react-icons/fa";
import Header from "./Header";

const ProfilePage = () => {
  return (
    <div>
      <Header/>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f0f0f0",
          borderRadius: "10px",
          padding: "30px",
          boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)",
          width: "400px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fff",
            borderRadius: "50%",
            height: "120px",
            width: "120px",
            marginBottom: "20px",
            boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
          }}
        >
          <FaUser size={80} color="#ff7f50" />
        </div>
        <div style={{ marginBottom: "20px", textAlign: "center" }}>
          <h2 style={{ marginBottom: "10px", fontSize: "24px" }}>UnKnown</h2>
          <p style={{ fontSize: "16px" }}>
            <FaEnvelope
              size={16}
              color="#ff4757"
              style={{ marginRight: "5px" }}
            />
            <a href="mailto:johndoe@example.com">unknown@example.com</a>
          </p>
          <p style={{ fontSize: "16px" }}>
            <FaPhone size={16} color="#2ecc71" style={{ marginRight: "5px" }} />
            <a href="tel:+1234567890">+1234567890</a>
          </p>
          <p style={{ fontSize: "16px" }}>
            <FaCalendarAlt
              size={16}
              color="#3498db"
              style={{ marginRight: "5px" }}
            />
            Member Since: January 2022
          </p>
        </div>
        <div style={{ fontSize: "20px" }}>
          <FaShoppingBasket
            size={30}
            color="#9b59b6"
            style={{ marginRight: "10px" }}
          />
          <FaHeart
            size={30}
            color="#e67e22"
            style={{ marginRight: "10px" }}
          />
          <FaCreditCard
            size={30}
            color="#3498db"
            style={{ marginRight: "10px" }}
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProfilePage;
