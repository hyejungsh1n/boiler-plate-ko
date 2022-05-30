import React from "react";
import InputBox from "./components/InputBox"
import PhoneList from "./components/PhoneList"
import PhoneItem from "./components/PhoneItem"
import "./App.css";


function App() {
  return (
    <div className="container">

      <InputBox />

      <PhoneList />


    </div>
  );
}

export default App;