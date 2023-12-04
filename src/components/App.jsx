import React from "react";
import Form from "./Form";

var registered = true;

var loggedIn = true;
var currentTime = new Date().getHours();
function App() {
  return (
    <div className="container">
      {currentTime > 12 && loggedIn ? <h1>Why are you still working?</h1> : <Form  isRegistered={registered}/>}
   
    </div>
  );
}

export default App;
