import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useUserAuth } from "../context/UserAuthContext";
function SignInOtp() {
  const [number, setNumber] = useState();
  const [otp, setOtp] = useState();
  const [error, setError] = useState();
  const [flag, setFlag] = useState(false);
  const [confirmObj, setConfirmObj] = useState("");
  const { setUpRecaptcha } = useUserAuth();
  const navigate = useNavigate();
  const getOTP = async (e) => {
    e.preventDefault();
    setError("");

    if (number === "" || number === undefined)
      return setError("Please enter a valid Number!");
    try {
      const response = await setUpRecaptcha(number);
      setConfirmObj(response);
      setFlag(true);
    } catch (err) {
      setError(err.message);
    }
  };
  const verifyOTP = async (e) => {
    e.preventDefault();
    console.log(otp);
    if (otp === "" || otp === null) return;
    try {
      setError("");
      await confirmObj.confirm(otp);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <>
      <div className="p-4 box">
        <h2 className="mb-3">Sign In with OTP</h2>
        <Form style={{ display: !flag ? "block" : "none" }}>
          <PhoneInput
            defaultCountry="PK"
            placeholder="Enter phone number"
            value={number}
            onChange={setNumber}
          />
          <p style={{ color: "red", marginTop: "15px" }}>{error}</p>
          <div id="recaptcha-container"></div>

          <div className="d-flex mt-3">
            <div className="mr-3">
              <Link to="/">
                <Button variant="primary" type="Submit" className="mr-3">
                  Cancel
                </Button>
              </Link>
            </div>
            <div>
              <Link to="/signinotp">
                <Button variant="secondary" className="mx-3" onClick={getOTP}>
                  Send OTP
                </Button>
              </Link>
            </div>
          </div>
        </Form>
        <Form style={{ display: flag ? "block" : "none" }}>
          <Form.Control
            type="text"
            placeholder="Enter OTP"
            onChange={(e) => setOtp(e.target.value)}
          ></Form.Control>
          <p style={{ color: "red", marginTop: "15px" }}>{error}</p>

          <div className="d-flex mt-3">
            <div className="mr-3">
              <Link to="/">
                <Button variant="primary" type="Submit" className="">
                  Cancel
                </Button>
              </Link>
            </div>
            <div>
              <Link to="/signinotp">
                <Button
                  variant="secondary"
                  className="mx-3"
                  onClick={verifyOTP}
                >
                  Verify OTP
                </Button>
              </Link>
            </div>
          </div>
        </Form>
      </div>
    </>
  );
}

export default SignInOtp;
