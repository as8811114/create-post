import { Component } from "react";

const imgSize = { width: "100px" };

export default class ListItem extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div
        style={{
          border: "5px black dotted",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "70%",
          minWidth: "100px",
          margin: "10px auto",
        }}
      >
        <div>{this.props.title}</div> <div>{this.props.content}</div>
        {this.props.imgUrl && (
          <img
            src={this.props.imgUrl}
            alt="Image Load Fail"
            style={imgSize}
          ></img>
        )}
      </div>
    );
  }
}
