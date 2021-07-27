import React, { Component } from "react";

class ReactionRate extends Component {
  state = {
    state: "waiting",
    message: "클릭하면 시작합니다",
    result: [],
  };
  timeout;
  startTime;
  endTime;
  onClickScreen = () => {
    const { state } = this.state;
    if (state == "waiting") {
      this.setState({
        state: "ready",
        message: "초록색이 되면 클릭",
      });
      this.timeout = setTimeout(() => {
        this.setState({
          state: "now",
          message: "클릭하세요!",
        });

        this.startTime = new Date();
      }, Math.floor(Math.random() * 1000) + 2000); //2~3초 사이
    } else if (state === "ready") {
      clearTimeout(this.timeout);
      alert("너무 급했어요!");
      this.setState({
        state: "waiting",
        message: "다시 클릭하세요!",
      });
    } else if (state === "now") {
      this.endTime = new Date();
      this.setState((prevState) => {
        return {
          state: "waiting",
          message: "클릭하면 시작합니다",
          result: [...prevState.result, this.endTime - this.startTime],
        };
      });
    }
  };

  onReset = () => {
    this.setState({
      result: [],
    });
  };

  renderAverage = () => {
    const { result } = this.state;
    return result.length === 0 ? null : (
      <>
        <div>평균 시간: {result.reduce((a, c) => a + c) / result.length}ms</div>
        <button onClick={this.onReset}>리셋</button>
      </>
    );
  };

  render() {
    const { state, message } = this.state;
    return (
      <>
        <div id="screen" className={state} onClick={this.onClickScreen}>
          {message}
        </div>
        {this.renderAverage()}
      </>
    );
  }
}

export default ReactionRate;
