import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Input from "./components/input/Input";
import Button from "./components/button/Button";

const App: React.FC = () => {
  return (
    <div className="App">
      <Input text="kim" />
      <Button number={2} text="Times" />
    </div>
  );
};

export default App;
