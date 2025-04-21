import React from "react";

const Employee = (props) => {
  {
    const { name, id } = props;
    return (
      <div>
        <h5>{`Name: ${name}, ID: ${id}`}</h5>
      </div>
    );
  }
};

export default Employee;
