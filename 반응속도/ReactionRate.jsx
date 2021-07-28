import React, { useState, useRef } from "react";

const ReactionRate = () => {
  const [state, setState] = useState("waiting");
  const [message, setMessage] = useState("클릭하면 시작합니다");
  const [result, setResult] = useState([]);
  const timeout = useRef(null);
  const startTime = useRef(0);
  const endTime = useRef(0);

  const onClickScreen = () => {
    if (state == "waiting") {
      timeout.current = setTimeout(() => {
        setState("now");
        setMessage("클릭하세요!");
        startTime.current = new Date();
      }, Math.floor(Math.random() * 1000) + 2000); //2~3초 사이
      setState("ready");
      setMessage("초록색이 되면 클릭");
    } else if (state === "ready") {
      clearTimeout(timeout.current);
      alert("너무 급했어요!");
      setState("waiting");
      setMessage("다시 클릭하세요!");
    } else if (state === "now") {
      endTime.current = new Date();
      setState("waiting");
      setMessage("클릭하면 시작합니다");
      setResult((prevResult) => {
        return [...prevResult, endTime.current - startTime.current];
      });
    }
  };

  const onReset = () => {
    setResult([]);
  };

  const renderAverage = () => {
    return result.length === 0 ? null : (
      <>
        <div>평균 시간: {result.reduce((a, c) => a + c) / result.length}ms</div>
        <button onClick={onReset}>리셋</button>
      </>
    );
  };

  return (
    <>
      <div id="screen" className={state} onClick={onClickScreen}>
        {message}
      </div>
      {renderAverage()}
    </>
  );
};
export default ReactionRate;
