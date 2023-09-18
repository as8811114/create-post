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
  removeData = (index) => {
    if (this.state.contentsList.length > 0) {
      let newList = this.state.contentsList.map((data) => data);
      newList.splice(index, 1);
      this.setState({ contentsList: newList });
    }
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
                  data={this.state.data}
                  contentsList={this.state.contentsList}
                />
              }
            />
            <Route
              path="/"
              element={
                <List
                  contentsList={this.state.contentsList}
                  removeData={this.removeData}
                />
              }
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
