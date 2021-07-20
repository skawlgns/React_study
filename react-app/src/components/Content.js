import React, { Component } from "react";

class Content extends Component {
  render() {
    return (
      <article>
        <h1>{this.props.title}</h1>
        <h3>{this.props.desc}</h3>
      </article>
    );
  }
}
export default Content;
