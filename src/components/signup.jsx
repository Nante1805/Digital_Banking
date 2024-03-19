import { Link } from 'react-router-dom';

function SignupPage() {
    return (
      <>
        <div className="container-fluid">
          <div style={mainContentStyle}>
            <div className="company__info" style={companyInfoStyle}>
              <span className="company__logo">
                <h2>
                  <span
                    className="fa fa-android fa fa-lock"
                    style={{ fontSize: "3em" }}
                  ></span>
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
                    <input
                      type="text"
                      name="Firstname"
                      id="firstname"
                      className="form__input"
                      placeholder="Firstname"
                      style={inputStyle}
                    />
                    <input
                      type="text"
                      name="Lastname"
                      id="lastname"
                      className="form__input"
                      placeholder="Lastname"
                      style={inputStyle}
                    />
                    <input
                      type="text"
                      name="Birthday"
                      id="birthday"
                      className="form__input"
                      placeholder="Birthday"
                      style={inputStyle}
                    />
                    <input
                      type="text"
                      name="Email"
                      id="email"
                      className="form__input"
                      placeholder="Email"
                      style={inputStyle}
                    />
                  </div>
                  <div style={{ flex: "1", marginLeft: "10px" }}>
                    <input
                      type="text"
                      name="Contact"
                      id="contact"
                      className="form__input"
                      placeholder="Contact"
                      style={inputStyle}
                    />
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="form__input"
                      placeholder="Password"
                      style={inputStyle}
                    />
                    <input
                      type="password"
                      name="ConfirmPassword"
                      id="confirmpassword"
                      className="form__input"
                      placeholder="Confirm Password"
                      style={inputStyle}
                    />
                  </div>
                </div>
  
                <div>
                  <input
                    type="submit"
                    value="Submit"
                    className="btn"
                    style={submitButtonStyle}
                  />
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
      </>
    );
  }
  
  const mainContentStyle = {
    width: "60%",
    borderRadius: "20px",
    boxShadow: "10px 10px 10px 10px rgba(0, 0, 0, 0.4)",
    margin: "5em auto",
    display: "flex",
  };
  
  const companyInfoStyle = {
    backgroundColor: "#008080",
    borderTopLeftRadius: "20px",
    borderBottomLeftRadius: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "#fff",
    padding: "3em",
  };
  
  const loginFormStyle = {
    backgroundColor: "#fff",
    width: "100%",
    marginLeft: "2em",
  };
  
  const inputStyle = {
    width: "75%",
    border: "0px solid transparent",
    borderRadius: "0",
    borderBottom: "1px solid #aaa",
    padding: "1em 0.5em 0.5em",
    paddingLeft: "2em",
    outline: "none",
    margin: "15px auto",
    transition: "all 0.5s ease",
  };
  
  const submitButtonStyle = {
    transition: "all 0.5s ease",
  width: "70%",
  borderRadius: "30px",
  color: "#008080",
  fontWeight: "600",
  backgroundColor: "#fff",
  border: "1px solid #008080",
  marginTop: "1.5em",
  marginBottom: "1em",
  };
  
  export default SignupPage;