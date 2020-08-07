import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import EmployeeListItem from "./components/EmployeeListItem";
import EmployeeList from "./components/EmployeeList";

class App extends Component {
  state = {
    employee: [
      {
        id: 1,
        name: "James King",
        photo: require("./components/person-one.jpeg"),
        postion: "President and CEO",
      },
      {
        id: 2,
        name: "Jhon Doe",
        photo: require("./components/person-two.jpeg"),
        postion: "Project Manager",
      },
      {
        id: 3,
        name: "Solomon Teshome",
        photo: require("./components/person-three.jpeg"),
        postion: "Principal CEO",
      },
      {
        id: 4,
        name: "Ana keller",
        photo: require("./components/person-four.jpeg"),
        postion: "CTO",
      },
    ],
  };

  render() {
    return (
      <div className="App" style={styleApp}>
        <Header />
        <SearchBar />
        <EmployeeList employee={this.state.employee} />
      </div>
    );
  }
}

const styleApp = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItem: "center",
  width: "30%",
  backgroundColor: "#f4f4f4",
  margin: "30px 0 0 20px",
  padding: "0 10px",
};

export default App;
