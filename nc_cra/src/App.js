import { useState, useEffect } from "react"

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("")
  const btnClick = () =>  setCounter((current) => current + 1);
  const inputText = (event) =>  setKeyword(event.target.value);  
  
  console.log("i run all the time");

  useEffect(() => {
    console.log("call the api...")
    
  }, []);

  useEffect(() => {
    console.log("this")
    if (keyword !== "" && keyword.length > 5) {
    console.log("SEARCH FOR", keyword);
    }
  }, [keyword])

  return (
    <div>
      <input value={keyword} onChange={inputText} type="text" placeholder="Search here..." />
      <h2>Counter {counter}</h2>
      <button onClick={btnClick}>Click me!</button>
    </div>
  );
}

export default App;
