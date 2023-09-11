import "./App.css";
import { Component } from "react";

import List from "./List";
import Form from "./Form";
import { Routes, Route, useNavigate } from "react-router-dom";
class App extends Component {
  constructor() {
    super();
    this.state = {
      contentsList: [],
      data: { title: "", content: "Please input Content.", imgUrl: "" },
    };
  }
  setData = (key, value) => {
    console.log(`set${key} : ${value}`);
    this.setState({
      data: { ...this.state.data, [key]: value },
    });
  };

  postData = () => {
    const newList = [...this.state.contentsList, this.state.data];
    this.setState({
      contentsList: newList,
    });
    console.log(this.state.contentsList);
    //reset Form
    this.resetForm();
    this.props.navigation("/");
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
  };
  removeData = () => {
    if (this.state.contentsList.length > 0) {
      const newList = this.state.contentsList.slice(
        0,
        this.state.contentsList.length - 1
      );
      this.setState({ contentsList: newList });
    }
    this.props.navigation("/");
  };

  render() {
    return (
      <div>
        <div>
          <Routes>
            <Route
              path="/post"
              element={
                <Form
                  setData={this.setData}
                  postData={this.postData}
                  removeData={this.removeData}
                  data={this.state.data}
                  contentsList={this.state.contentsList}
                />
              }
            />
            <Route
              path="/"
              element={<List contentsList={this.state.contentsList} />}
            ></Route>
          </Routes>
        </div>
      </div>
    );
  }
}
export default function AppF(props) {
  const navigation = useNavigate();

  return <App {...props} navigation={navigation} />;
}
