import React, { useState, useReducer } from "react";
import Table from "./Table";

const initialState = {
  winner: "",
  turn: "O",
  tableDate: [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ],
};

const reducer = (state, action) => {};
const TicTacToe = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <Table />
      {winner && <div>{winner}님의 승리!</div>}
    </>
  );
};

export default TicTacToe;
