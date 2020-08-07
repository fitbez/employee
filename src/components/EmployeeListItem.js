import React from "react";
import "./employeeListItem.css";

function EmployeeListItem(props) {
  return (
    <div>
      <div className="container" style={styleEmployeeListItem}>
        <div>
          {" "}
          <img
            style={styleEmployeeListImage}
            src={props.employee.photo}
            alt="person Image"
          />
        </div>

        <div style={styleContent}>
          <p className="para-one" style={styleP}>
            {props.employee.name}
          </p>
          <p className="para-two" style={styleP}>
            {props.employee.postion}
          </p>
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
  justifyContent: "flex-start",
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
