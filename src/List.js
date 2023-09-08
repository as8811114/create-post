import { Component } from "react";
import ListItem from "./ListItem";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
export default class List extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Link to={"/create-post"}>Go to Create Post Page</Link>
        <div>Contents:</div>
        {this.props.contentsList.map((list, i) => {
          return (
            <ListItem
              key={uuidv4()}
              title={list.title}
              content={list.content}
              imgUrl={list.imgUrl}
            />
          );
        })}
      </div>
    );
  }
}
