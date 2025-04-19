// import logo from "./logo.svg";
// import Documentation from "./Dokumentation";
// import Counter from "./Counter";
import React from "react";
import "./App.css";
import Employee from "./Employee";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Company Directory </h1>
        <Employee firstName="Jack" lastName="Smith" />
        <Employee firstName="Stephanie" lastName="A" />
        <Employee firstName="George" lastName="B" />
        <Employee firstName="Anthony" lastName="C" />
      </header>
    </div>
  );
}

export default App;
