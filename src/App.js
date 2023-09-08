import "./App.css";
import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import ListItem from "./ListItem";
import Form from "./Form";

class App extends Component {
  constructor() {
    super();
    this.state = {
      contentsList: [],
      data: { title: "", content: "Please input Content.", imgUrl: "" },
    };
  }
  setData = (key, value) => {
    this.setState({
      data: { ...this.state.data, [key]: value },
    });
  };

  postData = () => {
    const newList = [...this.state.contentsList, this.state.data];
    this.setState({
      contentsList: newList,
    });
    //reset Form
    this.resetForm();
  };
  resetForm = () => {
    this.setState({
      data: {
        title: "",
        content: "Please input Content.",
        imgUrl: "",
      },
    });
    document.getElementById("imgFile").value = "";
    console.log(this.props.data);
  };
  removeData = () => {
    if (this.state.contentsList.length > 0) {
      const newList = this.state.contentsList.slice(
        0,
        this.state.contentsList.length - 1
      );
      this.setState({ contentsList: newList });
    }
  };
  render() {
    return (
      <div>
        <div>
          <Form
            setData={this.setData}
            postData={this.postData}
            removeData={this.removeData}
            data={this.state.data}
            contentsList={this.state.contentsList}
          />
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
                <ListItem
                  key={uuidv4()}
                  title={list.title}
                  content={list.content}
                  imgUrl={list.imgUrl}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
