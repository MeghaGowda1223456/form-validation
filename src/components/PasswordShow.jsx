import React, { useState } from "react";
const PasswordShow = () => {
  const [passwordShown, setPasswordShown] = useState(false);

  const checkPassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div
      style={{
        boxShadow: "-1px 1px 10px 0px black ",
        borderRadius: "10px",
        padding: "15px",
        width: "390px",
        height: "370px",
        backgroundColor: "white",
        margin: "auto",
        marginTop: "140px",
      }}
    >
      <div className="container">
        <div className="input-text ">
          <input
            className="input form-control"
            placeholder="  Email address or phone number"
          />
          <input
            className="input form-control"
            type={passwordShown ? "text" : "password"}
            placeholder="Enter your password"
            name="password"
          />{" "}
          {passwordShown ? (
            <i
              style={{ position: "relative", bottom: "50px", left: "140px" }}
              onClick={checkPassword}
              class="far fa-eye-slash"
            ></i>
          ) : (
            <i
              style={{ position: "relative", bottom: "50px", left: "140px" }}
              onClick={checkPassword}
              class="fas fa-eye"
            ></i>
          )}
        </div>
        <div className="buttons">
          <br />
          <button className="login">Log in</button>
          <br />

          <hr />
          <button className="acc">Create New Account</button>
        </div>
      </div>
    </div>
  );
};
export default PasswordShow;
