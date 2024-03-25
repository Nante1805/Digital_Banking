import React from "react";
import Profil from "../images/essai.jpg";
function TopPage() {
  return (
    <div className="header-container" style={headerContainer}>
      <div className="logo-name" style={logoName}>
        <h2 style={logo}>LOGO</h2>
        <h3 style={name}>Name</h3>
      </div>

      <div className="search-bar" style={searchBar}>
        <form action="/Rechercher" method="get" style={formSearchStyle}>
          <input
            type="text"
            id="search_input"
            placeholder="Search..."
            style={inputSearch}
          />
          <button type="submit" className="search-button" style={searchButtonStyle}>
            Search
          </button>
        </form>
      </div>

      <div className="navbar" style={navbar}>
        <nav className="nav" style={nav}>
          <a style={navLink} href="#">
            Accueil
          </a>
          <a style={navLink} href="#">
            Dashboard
          </a>
          <a style={navLink} href="#">
            Account
          </a>
        </nav>
      </div>

      <div className="avatar-container" style={avatarContainer}>
        <img
          src={Profil}
          alt="user-avatar"
          
          className="avatar-img"
          style={avatarImg}
        />
      </div>
    </div>
  );
}

export default TopPage;

const headerContainer = {
  paddingLeft: "24px",
  paddingRight: "24px",
  position: "relative",
  display: "flex",
  alignItems: "center",
  padding: "16px",
  backgroundColor: "rgb(0, 128, 128)", // Ajout de couleur de fond
  color: "#fff", // Couleur du texte
  borderRadius:"12px",
};

const logoName = {
  display: "flex",
  alignItems: "center",
};

const logo = {
  fontSize: "24px",
  fontWeight: "bold",
  margin: "0",
  marginRight: "10px",
};

const name = {
  fontSize: "18px",
  margin: "0",
};

const searchBar = {
  marginLeft: "auto",
};

const formSearchStyle = {
  maxWidth: "400px",
  margin: "0 auto",
  padding: "5px",
  backgroundColor: "#f4f4f4",
  borderRadius: "8px",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  display: "flex",
};

const inputSearch = {
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  boxSizing: "border-box",
  flex: "1",
};

const searchButtonStyle = {
  marginLeft: "5px",
  padding: "10px",
  border: "none",
  borderRadius: "8px",
  backgroundColor: "#4CAF50",
  color: "white",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
};

const navbar = {
  marginLeft: "90px",
};

const nav = {
  display: "flex",
  alignItems: "center",
  height: "100%",
  marginRight:"100px",
};

const navLink = {
  padding: "0 20px",
  textDecoration: "none",
  color: "#fff", // Couleur des liens
  position: "relative",
  transition: "color 0.3s ease",
};

const avatarContainer = {
  display: "flex",
  position: "fixed",
  top: "16px",
  right: "24px",
};

const avatarImg = {
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  border: "2px solid #fff", // Ajout de bordure
};
