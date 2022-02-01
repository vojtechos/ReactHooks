import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const App = () => {
  
  const [counter, updateCounter] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${counter} times`;  
  });

    return(
      <div className="container">
        <img id="cookie" src="/cookie.png" alt="cookie.png" onClick={() => updateCounter(counter+1)}/>
        <p id="info">Cookies: {counter}</p>
      </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));