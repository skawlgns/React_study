const React = require("react");
const ReactDOM = require("react-dom");
const WhitePage = require("./white-page");

ReactDOM.render(<WhitePage />, document.querySelector("#root"));

if (module.hot) {
  module.hot.accept;
}
