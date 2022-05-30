import React from "react";
import InputBox from "./components/InputBox"
import PhoneList from "./components/PhoneList"
import PhoneItem from "./components/PhoneItem"
import "./App.css";

// class component 강의를 들어서 이렇게 되어 있음 

function App() {
  return (
    <div className="container">

      <InputBox />

      <PhoneList />

      <PhoneItem />


    </div>
  );
}

export default App;