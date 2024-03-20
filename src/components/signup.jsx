import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { apiUrl } from '../config/config';
import { mainContentStyle, companyInfoStyle, loginFormStyle, inputStyle, submitButtonStyle } from '../assets/signup';

function SignupPage() {
    const [user, setUser] = useState({
        firstname: '',
        lastname: '',
        birthday: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: user.firstname,
                    username: user.lastname,
                    birthday: user.birthday,
                    email: user.email,
                    password: user.password,
                }),
            });
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                alert('User registered successfully');
            } else {
                alert('Failed to register user');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error submitting form');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
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
                                <h2>Sign Up</h2>
                            </div>
                            <div style={{ display: "flex", flexWrap: "wrap" }}>
                                <div style={{ flex: "1", marginRight: "10px" }}>
                                    <input type="text" name="firstname" className="form__input" placeholder="Name" style={inputStyle} value={user.firstname} onChange={handleChange} />
                                    <input type="text" name="lastname" className="form__input" placeholder="Username" style={inputStyle} value={user.lastname} onChange={handleChange} />
                                    <input type="text" name="birthday" className="form__input" placeholder="Birthday" style={inputStyle} value={user.birthday} onChange={handleChange} />
                                    <input type="text" name="email" className="form__input" placeholder="Email" style={inputStyle} value={user.email} onChange={handleChange} />
                                </div>
                                <div style={{ flex: "1", marginLeft: "10px" }}>
                                    <input type="password" name="password" className="form__input" placeholder="Password" style={inputStyle} value={user.password} onChange={handleChange} />
                                </div>
                            </div>
                            <div>
                                <input type="submit" value="Submit" className="btn" style={submitButtonStyle} />
                            </div>
                        </div>
                        <div>
                            <p>
                                Do you already have an account? <Link to="/">Log In</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default SignupPage;
