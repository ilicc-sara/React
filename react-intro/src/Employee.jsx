import React from "react";

const Employee = (props) => {
  const { firstName, lastName, age } = props;
  return (
    <div>
      {/* prettier-ignore */}
      <h6> Employee Name: {firstName} {lastName} Who is age: {age}</h6>
    </div>
  );
};

export default Employee;
