import React from "react";
import { useNavigate } from "react-router-dom";
const Move = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <h1>This is Move</h1>
      <button
        onClick={() => {
          navigate("/home");
        }}
      >
        Go to Home
      </button>
    </>
  );
};

export default Move;
