import React from "react";
import "./LogoBanner.css"; // Import CSS for smooth scrolling

// List of brand logos (replace with actual images)
const logos = [
  "/public/TikTok_logo.png",
  "/public/TikTok_logo.png",
  "/public/TikTok_logo.png",
  "/public/TikTok_logo.png",
];

const LogoBanner = () => {
  return (
    <div className="logo-banner">
      <div className="logo-track">
        {logos.concat(logos).map((logo, index) => (
          <img key={index} src={logo} alt="Brand Logo" className="logo" />
        ))}
      </div>
    </div>
  );
};

export default LogoBanner;
