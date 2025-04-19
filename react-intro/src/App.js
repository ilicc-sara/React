import logo from "./logo.svg";
import Documentation from "./Dokumentation";
import "./App.css";

function App() {
  const headerText = "Hello Youtube from my variable";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Documentation />
        <p>{headerText}</p>
      </header>
    </div>
  );
}

export default App;
