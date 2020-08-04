import React from "react";
import Person from "./person-one.jpeg";

function EmployeeListItem() {
  return (
    <div>
      <div className="container" style={styleEmployeeListItem}>
        <div>
          {" "}
          <img style={styleEmployeeListImage} src={Person} alt="person Image" />
        </div>

        <div style={styleContent}>
          <p style={styleP}>James King</p>
          <p style={styleP}>President and CEO</p>
        </div>
      </div>
    </div>
  );
}

const styleEmployeeListImage = {
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  margin: "0 0 0 10px",
};

const styleEmployeeListItem = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#ffffff",
  width: "100%",
  padding: "10px 0",
  height: "50px",
  margin: "10px 0",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.25)",
  borderRadius: "7px",
};

const styleContent = {
  margin: "0 20px",
};

const styleP = {
  padding: "0",
  margin: "0",
};
export default EmployeeListItem;
