// import logo from "./logo.svg";
// import Documentation from "./Dokumentation";
// import Counter from "./Counter";
import React from "react";
import "./App.css";
import Employee from "./Employee";

// const employeeInfo = [
//   {
//     firstName: "Jack",
//     lastName: "Smith",
//     age: "21",
//     employeeId: "1",
//   },
//   {
//     firstName: "Stephanie",
//     lastName: "A",
//     age: "21",
//     employeeId: "2",
//   },
//   {
//     firstName: "George",
//     lastName: "B",
//     age: "21",
//     employeeId: "3",
//   },
//   {
//     firstName: "Anthony",
//     lastName: "C",
//     age: "21",
//     employeeId: "4",
//   },
// ];

// const employee = {
//   id: "ABC",
//   name: "Anthony",
//   salary: "$10",
//   address: {
//     salary: "$100",
//     street: "210 Washington Street",
//     country: "Canada",
//     province: "Ontario",
//     zones: {
//       plantZone: "7B",
//       alienZone: "41",
//     },
//   },
// };

const employees = ["Anthony", "Kevin", "Stephanie", "George"];

function App() {
  return (
    <div className="App">
      <h1>
        {employees.map((employee) => {
          return <h1> {employee}</h1>;
        })}{" "}
      </h1>
    </div>
  );

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <h1> Company Directory </h1>
  //       {employeeInfo.map((employee) => {
  //         // const { firstName, lastName, age } = employee;
  //         return <Employee key={employee.employeeId} {...employee} />;
  //       })}
  //       {/* <Employee firstName="Jack" lastName="Smith" age="21" />
  //       <Employee firstName="Stephanie" lastName="A" age="21" />
  //       <Employee firstName="George" lastName="B" age="21" />
  //       <Employee firstName="Anthony" lastName="C" age="21" /> */}
  //     </header>
  //   </div>
  // );
  // const {
  //   name,
  //   id,
  //   address: {
  //     street,
  //     country,
  //     province,
  //     zones: { plantZone: myPlantZone, alienZone },
  //   },
  // } = employee;
  // return (
  //   <div className="App">
  //     <h2>{name}</h2>
  //     <h2>{id}</h2>
  //     <h2>
  //       {street} {country} {province} {myPlantZone} {alienZone}
  //     </h2>
  //   </div>
  // );
}

export default App;
