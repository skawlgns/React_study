import React from "react";
import { useNavigate } from "react-router-dom";
const Home = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <h1>This is Home</h1>
      <button
        onClick={() => {
          navigate("/move");
        }}
      >
        Go to Next
      </button>
    </>
  );
};

export default Home;
