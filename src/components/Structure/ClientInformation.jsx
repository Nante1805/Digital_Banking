import Header from "../Head/Header";
import Profil from "../images/essai.jpg";

function ClientInformation() {
  const handleClick = () => {
    const modalContainer = document.querySelector('.modal-container');
    modalContainer.style.display = 'block';
  };

  const handleClose = () => {
    const modalContainer = document.querySelector('.modal-container');
    modalContainer.style.display = 'none';
  };

  return (
    <>
      <Header />

      <div id="body" style={{ margin: 0, padding: 0 }}>
        <div className="Profil" style={profilBox}>
          <h2 id="ProfilText" style={ProfilText}>
            Profil
          </h2>
        </div>
      </div>
      <div className="container" style={container}>
        <div className="profile-picture" style={profilPicture}>
          <img src={Profil} alt="Photo de profil" style={{ width: "100%", height: "100%" }} />
        </div>
        <div className="profile-info" style={{ marginLeft: "20px" }}>
          <h2 style={profileTitle}>Nom et Prénom</h2>
          <p style={profileInfo}>John Doe</p>
          <h2 style={profileTitle}>Date de Naissance</h2>
          <p style={profileInfo}>01/01/90</p>
          <h2 style={profileTitle}>Salaire Mensuel Net</h2>
          <p style={profileInfo}>500.000 Ariary</p>
          <button id="editProfile" style={editProfil} onClick={handleClick}>
            Modifier mon profil
          </button>
        </div>
        <div className="modal-container" style={{ ...modalContainerHidden, display: 'none' }}>
          <div className="modal" style={modal}>

            <h2 id="editProfilButton" style={modalTitle}>
              Modifier mon profil 
              <span style={closeButton} onClick={handleClose}>X</span>
            </h2>
            <form action="/editProfil" method="post" style={modalForm}>
              <label htmlFor="lastname" style={modalLabel}>Nom</label>
              <input type="text" id="lastname" name="lastname" required style={modalInput} />

              <label htmlFor="firstname" style={modalLabel}>Prénom(s)</label>
              <input type="text" id="firstname" name="firstname" required style={modalInput} />

              <label htmlFor="birthDate" style={modalLabel}>Date de Naissance</label>
              <input type="date" id="birthDate" name="birthDate" required style={modalInput} />

              <label htmlFor="salire" style={modalLabel}>Salaire mensuel Net en Ariary: </label>
              <input type="number" id="salire" name="salire" required style={modalInput} />

              <button type="submit" style={modalButton}>Modifiez le profil</button>
            </form>

          </div>
        </div>
      </div>
    </>
  );
}

// Styles CSS 
const profilBox = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#f0f0f0",
  border: " 1px solid #ccc",
  borderRadius: "10px",
  marginBottom: "20px",
  padding: "20px",
  marginTop:"5px",
  width:"auto",
  height:"1px",
};
const ProfilText = {
  fontSize: "24px",
  fontWeight: "bold",
  margin: 0,
};
const container = {
  maxWidth: "600px",
  margin: "20px auto",
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "10px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  
};
const profilPicture = {
  width: "100px",
  height: "100px",
  borderRadius: "50%",
  overflow: "hidden",
  marginRight: "20px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
};
const editProfil = {
  padding: "15px 30px",
  backgroundColor: "rgb(0, 128, 128)",
  color: "#fff",
  border: "none",
  borderRadius: "10px",
  fontSize: "17px",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
};
const modalContainerHidden = {
  position: "fixed",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  zIndex: "100",
};
const modal = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  backgroundColor: "#fff",
  padding: "50px",
  borderRadius: "10px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
};
const modalButton = {
  padding: "15px 30px",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "25px",
  fontSize: "18px",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
};
const profileTitle = {
  fontSize: "18px",
  fontWeight: "bold",
  margin: "0",
  textTransform: "uppercase",
};
const profileInfo = {
  fontSize: "16px",
  marginBottom: "10px",
  color: "#555",
};
const modalTitle = {
  textAlign: "center",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "0",
  position: "relative",
  color: "#333",
};
const modalForm = {
  marginTop: "20px",
};
const modalLabel = {
  fontSize: "16px",
  marginBottom: "5px",
  display: "block",
  color: "#555",
};
const modalInput = {
  width: "100%",
  padding: "15px",
  marginBottom: "20px",
  borderRadius: "10px",
  border: "1px solid #ccc",
  transition: "border-color 0.3s ease",
  color: "#555",
};
const closeButton = {
  position: "absolute",
  top: "-40px",
  right: "-20px",
  fontSize: "24px",
  color: "#999",
  cursor: "pointer",
  transition: "color 0.3s ease",
};




// JavaScript
document.addEventListener('DOMContentLoaded', function() {
  const editProfileButton = document.querySelector('#editProfileButton');
  const modalContainer = document.querySelector('.modal-container');
  const modalElement = document.querySelector('.modal');

  if (editProfileButton) {
    editProfileButton.addEventListener('click', () => {
      modalContainer.style.display = 'block';
    });
  }

  if (modalElement) {
    modalElement.addEventListener('click', (event) => {
      if (event.target === modalElement) {
        modalContainer.style.display = 'none';
      }
    });
  }
});





export default ClientInformation;
