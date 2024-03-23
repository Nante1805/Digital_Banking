import { Link } from "react-router-dom";

function LoginPage() {
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
                <h2>Log In</h2>
              </div>
              <div>
                <form control="" className="form-group">
                  <div>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      className="form__input"
                      placeholder="Username"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="form__input"
                      placeholder="Password"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      name="remember_me"
                      id="remember_me"
                      className=""
                    />
                    <label htmlFor="remember_me">Remember Me!</label>
                  </div>
                  <div>
                    
                    <input
                    
                      type="submit"
                      value="Submit"
                      className="btn"
                      style={submitButtonStyle}
                    />
                    
                  </div>
                </form>
              </div>
              <div>
                <p>
                  Don't have an account? <Link to="/signup">Register Here</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const mainContentStyle = {
  width: "50%",
  borderRadius: "20px",
  boxShadow: "10px 10px 10px 10px rgba(0, 0, 0, 0.4)",
  margin: "10em auto",
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
  width: "60%",
};

const inputStyle = {
  width: "100%",
  border: "0px solid transparent",
  borderRadius: "0",
  borderBottom: "1px solid #aaa",
  padding: "1em 0.5em 0.5em",
  paddingLeft: "2em",
  outline: "none",
  margin: "1.5em auto",
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
  cursor : "pointer"
};

export default LoginPage;
