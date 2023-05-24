import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn } = useUserAuth();
  const navigate = useNavigate();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setError("");
  //   try {
  //     await logIn(email, password);
  //     navigate("/home");
  //   } catch (err) {
  //     setError(err.message);
  //   }
  // };

  return (
    <>
      <div className="p-4 box container">
        <h2 className="mb-3">Firebase Auth Login</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form>
          <div>
            <Link to="/signinotp">
              <Button variant="secondary">Sign In with OTP</Button>
            </Link>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Login;
