import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";

const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div className="p-4 box mt-3 text-center">
        <h1>
          Welcome Home <br />
        </h1>
        {user && user.email}
        <div className="d-grid gap-2 mt-4">
          <Button variant="danger" onClick={handleLogout}>
            Log out
          </Button>
        </div>
      </div>
    </>
  );
};

export default Home;
