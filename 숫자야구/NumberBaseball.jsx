const React = require("react");
const { Component } = React;

class NumberBaseball extends Component {
  state = {
    text: "NumberBaseball",
  };
  render() {
    return <h1>{this.state.text}</h1>;
  }
}

module.exports = NumberBaseball;
