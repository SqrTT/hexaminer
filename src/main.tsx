/// <reference path="../typings/react/react.d.ts" />
/// <reference path="../typings/react/react-dom.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";

import Board from "./board";

let tile = new Board(10, 10, 10);

interface RTileProps extends React.Props<any> {
  status: string;
}


class RTile extends React.Component<RTileProps, {}> {
  render() {
    return <div>Hello {this.props.status}</div>;
  }
}

let test = <div className="asadsd"></div>;


export default () => {
  ReactDOM.render(
  <RTile status="123"/>,
  document.getElementById("main")
);

}
