import React, { useState, useReducer, useCallback } from "react";
import Table from "./Table";

// 2
const initialState = {
  winner: "",
  turn: "O",
  tableDate: [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ],
};

// 3
const reducer = (state, action) => {
  // action이 실행(dispatch)될 때마다 이게 실행 됨
  switch (action.type) {
    case "SET_WINNER":
      // state.winnder = action.winner; 이렇게는 하면 안 됨
      return {
        ...state,
        winner: action.winner,
      };
  }
};

const TicTacToe = () => {
  // 1
  const [state, dispatch] = useReducer(reducer, initialState);

  // 4
  const onClickTable = useCallback(() => {
    dispatch({ type: "SET_WINNER", winner: "O" }); // 안에 내용은 action이라 부름
  }, []);

  return (
    <>
      <Table onClick={onClickTable} />
      {state.winner && <div>{state.winner}님의 승리!</div>}
    </>
  );
};

export default TicTacToe;
