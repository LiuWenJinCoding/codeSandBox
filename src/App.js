import React, { useState } from "react";
import "./styles.css";
import Test from "./Test";

export default function App() {
  let [show, setShow] = useState(true);
  const handleUnmount = () => {
    setShow(!show);
  };
  return (
    <div className="App">
      {show ? <Test /> : <></>}
      <button onClick={handleUnmount}>dodo</button>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
