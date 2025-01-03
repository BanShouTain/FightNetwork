import React from "react";

function Footer() {
  return (
    <div
      style={{ color: "lightskyblue" }}
      className="d-flex flex-column h-150 justify-content-center align-items-center bg-dark mb-0 mt-5"
    >
      <div className="mt-3">
        <img
          style={{ width: "45px", marginRight: "20px" }}
          src="/src/assets/images/instalogo.png"
        ></img>
        <img
          style={{ width: "45px", marginRight: "20px" }}
          src="/src/assets/images/ytlogo.png"
        ></img>
        <img
          style={{ width: "45px", marginRight: "20px" }}
          src="/src/assets/images/twitterlogo.png"
          className="bg-light"
        ></img>
      </div>
      <div className="mt-3">
        <a style={{ margin: "0", marginRight: "20px" }}>Home</a>
        <a style={{ margin: "0", marginRight: "20px" }}>Dashboard</a>
        <a style={{ margin: "0", marginRight: "20px" }}>Support</a>
        <a style={{ margin: "0" }}>Contact</a>
      </div>
      <p className="mt-3 fs-6">© 2025 Copyrights Owned By BanShouTain</p>
    </div>
  );
}

export default Footer;
