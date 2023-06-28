import React, { lazy, Suspense } from "react";
import "./styles.css";

const FirstApp = lazy(() => import("FIRST_APP/app"));

const App = () => {
  const [name, setName] = React.useState(null);
  const [value, setSelectedItem] = React.useState()
  const handleClick = (value) => {
    setSelectedItem(value)
    console.log(value)
  }
  console.log(value)
  return (
    <div className="App">
      <h1>CNA Host</h1>
      {/* { name ? <p>Your name is: {name}</p> : null } */}
      <div style={{ display: "flex" }}>
      <div style={{ width: "30%", border: "1px solid black", height: "100vh", display: "flex", flexDirection: "column" }}>
        <button onClick={() => handleClick("getQuote")}>
          Get Quote
        </button>
        <button onClick={() => handleClick("endorsePolicy")}>
          Endorse Policy
        </button>
      </div>
      <div>
        {value === "getQuote" ?
        <div>
        <Suspense fallback={<span>Loading...</span>}>
          <FirstApp onChange={(e) => setName(e.target.value)} />
        </Suspense>
        </div>
        : 
        value === "endorsePolicy" ? 
        "endorsePolicy micro app" :
        null}
      </div>
      </div>
    </div>
  );
};

export default App;