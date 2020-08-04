import React from "react";
import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import EmployeeListItem from "./components/EmployeeListItem";

function App() {
  return (
    <div className="App" style={styleApp}>
      <Header />
      <SearchBar />
      <EmployeeListItem />
      <EmployeeListItem />
      <EmployeeListItem />
      <EmployeeListItem />
      <EmployeeListItem />
    </div>
  );
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
