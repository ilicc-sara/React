import React from "react";
import "./App.css";
import Employee from "./Employee";

const employee = [
  {
    name: "Anthony",
    id: "ABC",
  },
  {
    name: "George",
    id: "QWE",
  },
];

function App() {
  const baseEmployeeObjet = {
    role: "employee",
    company: "CodeSandbox",
  };

  const firstEmployee = { ...baseEmployeeObjet, ...employee[0] };
  console.log(firstEmployee);

  return (
    <div className="App">
      <h1>Hello</h1>
      <Employee {...firstEmployee} />
    </div>
  );
}

export default App;
