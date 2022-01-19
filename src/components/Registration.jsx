import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signnin.css";

function Registration(props) {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    phnumber: "",
    dob:"",
    email: "",
    password: "",
    confirmpassword: "",
  });
  let { fname, lname, phnumber,dob, email, password, confirmpassword } = user;
  const [fnameValid, setfnameValid] = useState(true);
  const [fnameErr, setfnameErr] = useState("");

  const [lnameValid, setlnameValid] = useState(true);
  const [lnameErr, setlnameErr] = useState("");

  const [phValid, setphValid] = useState(true);
  const [phErr, setphErr] = useState("");

  const [emailValid, setemailValid] = useState(true);
  const [emailErr, setemailErr] = useState("");

  const [passwordValid, setpasswordValid] = useState(true);
  const [passwordErr, setpasswordErr] = useState("");

  const [confirmpasswordValid, setconfirmpasswordValid] = useState(true);
  const [confirmpasswordErr, setconfirmpasswordErr] = useState("");
//   const [tableData, setTableData] = useState([]);

  //validate first name number
  const validateFname = (fname) => {
    const regEx = /^[A-Za-z]+$/;
    // const valid=email;
    if (fname === "") {
      setfnameValid(false);
      setfnameErr("first name is required");
      return false;
    } else if (!regEx.test(fname)) {
      setfnameValid(false);
      setfnameErr("First Name must be only string");
      return false;
    } else {
      setfnameValid(true);
      setfnameErr("");
      return true;
    }
  };

  //validate last name
  const validateLname = (lname) => {
    const regEx = /^[A-Za-z]+$/;
    // const valid=email;
    if (lname === "") {
      setlnameValid(false);
      setlnameErr("last name is required");
      return false;
    } else if (!regEx.test(lname)) {
      setlnameValid(false);
      setlnameErr("Last Name must be only string");
      return false;
    } else {
      setlnameValid(true);
      setlnameErr("");
      return true;
    }
  };

  //validate mibile number
  const validatePhnumber = (phnumber) => {
    const regEx = /^[+0]{0,2}(91)?[0-9]{10}$/;
    if (phnumber === "") {
      setphValid(false);
      setphErr("Phone number can not be empty");
      return false;
    } else if (!regEx.test(phnumber)) {
      setphValid(false);
      setphErr("Please enter valid phone number");
      return false;
    } else {
      setphValid(true);
      setphErr("");
      return true;
    }
  };
  //validate email
  const validateEmail = (email) => {
    const regEx =
      /^[a-zA-Z0-9.!#$%&*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    // const valid=email;
    if (email === "") {
      setemailValid(false);
      setemailErr("Please enter valid email");
      return false;
    } else if (!regEx.test(email)) {
      setemailValid(false);
      setemailErr("Email Address must be in valid formate with @ symbol");
      return false;
    } else {
      setemailValid(true);
      setemailErr("");
      return true;
    }
  };
  //validate password
  const validatePassword = (password) => {
    const regEx =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (password === "") {
      setpasswordValid(false);
      setpasswordErr("Please enter valid password");
      return false;
    } else if (!regEx.test(password)) {
      setpasswordValid(false);
      setpasswordErr(
        "Password must have at least one Uppercase, lowercase, digit, special characters & 8 characters"
      );
      return false;
    } else {
      setpasswordValid(true);
      setpasswordErr("");
      return true;
    }
  };
  //validate confirm password
  const confirmPasswordValidate = (cofirmpassword, password) => {
    if (cofirmpassword === "") {
      setconfirmpasswordValid(false);
      setconfirmpasswordErr("Confirm Password is required");
      return false;
    } else if (confirmpassword !== password) {
      setconfirmpasswordValid(false);
      setconfirmpasswordErr("Confirm Password does not match");
      return false;
    } else {
      setconfirmpasswordValid(true);
      setconfirmpasswordErr("");
      return true;
    }
  };

  const handleChange = (e) => {
    const userCopy = { ...user };
    userCopy[e.target.name] = e.target.value;
    setUser(userCopy);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    const validFname = validateFname(user.fname);
    const regExFname = RegExp(/^[A-Za-z]+$/);
    const validLname = validateLname(user.lname);
    const regExLname = RegExp(/^[A-Za-z]+$/);
    const validPh = validatePhnumber(user.phnumber);
    const regExPh = RegExp(/^[+0]{0,2}(91)?[0-9]{10}$/);
    const validEmail = validateEmail(user.email);
    const validPassword = validatePassword(user.password);
    const regExEmail = RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    const regExPassword = RegExp(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    );
    const validConfirmPassword = confirmPasswordValidate(
      user.confirmpassword,
      user.password
    );

    if (
      !validFname ||
      !regExFname.test(fname) ||
      !validLname ||
      !regExLname.test(lname) ||
      !validPh ||
      !regExPh ||
      !dob||
      !validEmail ||
      !regExEmail.test(email) ||
      !validPassword ||
      !regExPassword ||
      !validConfirmPassword
    ) {
      console.log("not valid");
    } else {
      props.history.push("/sign-in");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} id="form1" style={{ width: "350px" }}>
        <div>
          <label htmlFor="fname" className="form-label">
            First-Name
          </label>
          <input
            type="text"
            name="fname"
            value={fname}
            className="form-control"
            onChange={handleChange}
          />
          {!fnameValid ? (
            <span style={{ color: "red", fontSize: "8px" }}>{fnameErr}</span>
          ) : null}
        </div>
        <div>
          <label htmlFor="lname" className="form-label">
            Last-Name
          </label>
          <input
            type="text"
            name="lname"
            value={lname}
            className="form-control"
            onChange={handleChange}
          />
          {!lnameValid ? (
            <span style={{ color: "red", fontSize: "8px" }}>{lnameErr}</span>
          ) : null}
        </div>
        <div>
          <label htmlFor="pnumber" className="form-label">
            Phone-Number
          </label>
          <input
            type="text"
            name="phnumber"
            value={phnumber}
            className="form-control"
            onChange={handleChange}
          />
          {!phValid ? (
            <span style={{ color: "red", fontSize: "8px" }}>{phErr}</span>
          ) : null}
        </div>
        <div>
            <label htmlFor="dob" className="form-label">Date Of Birth</label>
            <input type="date" name="dob"
            value={dob}
            className="form-control"
            onChange={handleChange}  />
        </div>
        <div>
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="text"
            name="email"
            value={email}
            className="form-control"
            onChange={handleChange}
          />
          {!emailValid ? (
            <span style={{ color: "red", fontSize: "8px" }}>{emailErr}</span>
          ) : null}
        </div>
        <div>
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={password}
            className="form-control"
            onChange={handleChange}
          />
          {!passwordValid ? (
            <span style={{ color: "red", fontSize: "8px" }}>{passwordErr}</span>
          ) : null}
        </div>
        <div>
          <label htmlFor="confirmpassword" className="form-label">
            Confirm-password
          </label>
          <input
            type="password"
            name="confirmpassword"
            value={confirmpassword}
            className="form-control"
            onChange={handleChange}
          />
          {!confirmpasswordValid ? (
            <span style={{ color: "red", fontSize: "8px" }}>
              {confirmpasswordErr}
            </span>
          ) : null}
        </div>
        <div>
          <input
            type="submit"
            value="Register"
            className="btn btn-primary"
            id="button"
          />
        </div>
      </form>
      <Link
        style={{ textDecoration: "none", marginLeft: "600px" }}
        to={"/sign-in"}
      >
        already register
      </Link>
    </div>
  );
}

export default Registration;
