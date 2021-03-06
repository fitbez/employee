import React from "react";
import EmployeeListItem from "./EmployeeListItem";

export default function EmployeeList(props) {
  return (
    <div>
      {props.employee.map((employee) => {
        return <EmployeeListItem employee={employee} />;
      })}
    </div>
  );
}
