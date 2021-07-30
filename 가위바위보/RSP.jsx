import React, { Component } from "react";

//리액트 라이프사이클
// 클래스의 경우 -> constructor -> render -> ref -> componentDidMount
// -> (setState/Props 가 바뀔때) -> shouldComponentUpdate(true) -> render -> componentDidUpdate
// 부모가 자식을 없앴을 때 -> componentWillUnmount -> 소멸

class RSP extends Component {
  state = {
    result: "",
    imgCoord: 0,
    scroe: 0,
  };

  componentDidMount() {} //컴포넌트가 첫 렌더를 성공적으로 실행하면 실행된다.

  componentDidUpdate() {} // 리렌더링 후 실행

  componentWillUnmount() {} //컴포넌트가 제거되기 직전

  render() {
    const { result, score, imgCoord } = this.state;
    return (
      <>
        <div
          id="computer"
          style={{
            background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`,
          }}
        />
        <div>
          <button id="rock" className="btn" onClick={onClickBtn("바위")}>
            바위
          </button>
          <button id="scissor" className="btn" onClick={onClickBtn("가위")}>
            가위
          </button>
          <button id="paper" className="btn" onClick={onClickBtn("보")}>
            보
          </button>
        </div>
        <div>{result}</div>
        <div>현재 {score}점</div>
      </>
    );
  }
}

export default RSP;
