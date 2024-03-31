
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { mainContentStyle, companyInfoStyle, loginFormStyle, inputStyle, submitButtonStyle } from '../assets/login';

function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/login', formData);
      if (response.status === 200) {
        // Stockage du token JWT dans le LocalStorage
        localStorage.setItem('token', response.data.token); // Supposons que le token est renvoyé dans response.data.token
        navigate('/dashboard');
      } else {
        alert('Identifiants incorrects');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Erreur de connexion');
    }
  };

  return (
    <div className="container-fluid">
      <div style={mainContentStyle}>
        <div className="company__info" style={companyInfoStyle}>
          <span className="company__logo">
            <h2>
              <span className="fa fa-android fa fa-lock" style={{ fontSize: "3em" }}></span>
            </h2>
          </span>
          <h4 className="company_title">Notre Logo ici</h4>
        </div>
        <div className="login_form" style={loginFormStyle}>
          <div style={{ padding: "0 2em" }}>
            <div style={{ color: "#008080" }}>
              <h2>Connexion</h2>
            </div>
            <div>
              <form onSubmit={handleSubmit} className="form-group">
                <div>
                  <input type="text" name="email" className="form__input" placeholder="Email" style={inputStyle} value={formData.email} onChange={handleChange} />
                </div>
                <div>
                  <input type="password" name="password" className="form__input" placeholder="Mot de passe" style={inputStyle} value={formData.password} onChange={handleChange} />
                </div>
                <div>
                  <input type="submit" value="Se connecter" className="btn" style={submitButtonStyle} />
                </div>
              </form>
            </div>
            <div>
              <p>
                Vous n'avez pas de compte? <Link to="/signup">Inscrivez-vous ici</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
