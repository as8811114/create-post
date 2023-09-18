import { Component } from "react";
import { Link } from "react-router-dom";
const s = { padding: "20px" };
const imgSize = { width: "100px" };
export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { hasImage: false };
  }
  render() {
    return (
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        onSubmit={(e) => {
          e.preventDefault();
          console.log(this.props.contentsList);
        }}
      >
        <Link to={"/"}>Go to List Page</Link>
        <div style={s}>Title:</div>
        <input
          style={{ width: "75%", maxWidth: "500px" }}
          value={this.props.data.title}
          id={"title"}
          onChange={(e) => {
            this.props.setData("title", e.target.value);
          }}
        ></input>
        <div style={s}>Content:</div>
        <textarea
          style={{ width: "75%", maxWidth: "500px" }}
          value={this.props.data.content}
          cols={50}
          rows={5}
          id={"content"}
          onChange={(e) => {
            this.props.setData("content", e.target.value);
          }}
        ></textarea>
        {this.state.hasImage && (
          <div>
            <div>Image Preview:</div>
            <img
              src={this.props.data.imgUrl}
              alt="Image Load Fail"
              style={imgSize}
            ></img>
          </div>
        )}
        <div
          style={{
            ...s,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            flexWrap: "wrap",
            width: "75%",
          }}
        >
          <input
            type="file"
            id="imgFile"
            onChange={(e) => {
              if (e.target.files[0]) {
                const img64 = window.URL.createObjectURL(e.target.files[0]);
                this.setState({ hasImage: true });
                this.props.setData("imgUrl", img64);
              }
            }}
          />
          <button
            onClick={() => {
              this.props.postData();
              this.setState({ hasImage: false });
              document.getElementById("imgFile").value = "";
            }}
          >
            submit
          </button>
        </div>
      </form>
    );
  }
}
