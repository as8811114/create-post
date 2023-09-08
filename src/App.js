import "./App.css";
import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
const s = { padding: "20px" };
const imgSize = { width: "100px" };

class App extends Component {
  constructor() {
    super();
    this.state = {
      contentsList: [],
      hasImage: false,
      data: { title: "", content: "Please input Content.", imgUrl: "" },
    };
  }
  render() {
    return (
      <div>
        <div>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            onSubmit={(e) => {
              e.preventDefault();
              console.log(this.state.contentsList);
            }}
          >
            <div style={s}>Title:</div>
            <input
              style={{ width: "75%", maxWidth: "500px" }}
              value={this.state.data.title}
              id={"title"}
              onChange={(e) => {
                this.setState({
                  data: { ...this.state.data, title: e.target.value },
                });
                console.log(this.state.data);
              }}
            ></input>
            <div style={s}>Content:</div>
            <textarea
              style={{ width: "75%", maxWidth: "500px" }}
              value={this.state.data.content}
              cols={50}
              rows={5}
              id={"content"}
              onChange={(e) => {
                this.setState({
                  data: { ...this.state.data, content: e.target.value },
                });
                console.log(this.state.data);
              }}
            ></textarea>
            {this.state.hasImage && (
              <div>
                <div>Image Preview:</div>
                <img
                  src={this.state.data.imgUrl}
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
                name="filename"
                onChange={(e) => {
                  if (e.target.files[0]) {
                    const img64 = window.URL.createObjectURL(e.target.files[0]);
                    const newData = { ...this.state.data, imgUrl: img64 };
                    this.setState({ data: newData, hasImage: true });
                  }
                }}
              />
              <button
                onClick={async () => {
                  const newList = [...this.state.contentsList, this.state.data];
                  this.setState({
                    contentsList: newList,
                    hasImage: false,
                    data: {
                      title: "",
                      content: "Please input Content.",
                      imgUrl: "",
                    },
                  });
                  document.getElementById("imgFile").value = "";
                  console.log(this.state.data);
                }}
              >
                submit
              </button>
              <button
                onClick={() => {
                  if (this.state.contentsList.length > 0) {
                    const newList = this.state.contentsList.slice(
                      0,
                      this.state.contentsList.length - 1
                    );
                    this.setState({ contentsList: newList });
                  }
                }}
              >
                remove
              </button>
            </div>
          </form>
          <hr></hr>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {this.state.contentsList.map((list, i) => {
              return (
                <div
                  key={uuidv4()}
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
                  <div>{list.title}</div> <div>{list.content}</div>
                  {list.imgUrl && <img src={list.imgUrl} style={imgSize}></img>}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
