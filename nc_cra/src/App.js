import { useState, useEffect } from "react"

function Hello() {
  useEffect(() => {
    console.log("im living");
  }, []);
  return <h1>Hello</h1>
}

const App = () => {

  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing(prev => !prev);  

  return ( <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "SHOW"}</button>
    </div>
  );
}


export default App;
