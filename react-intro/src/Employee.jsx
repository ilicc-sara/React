import React from "react";

const Employee = (props) => {
  console.log(props);
  return (
    <div>
      {/* prettier-ignore */}
      <h6> Employee Name: {props.firstName} {" "} {props.lastName}</h6>
    </div>
  );
};

export default Employee;
