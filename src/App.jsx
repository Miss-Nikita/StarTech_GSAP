import React, { useState } from "react";
import Structure from "./components/structure/Structure";
import Homepage from "./components/homepage/Homepage";
import NameForm from "./components/nameForm/NameForm";

const App = () => {
  localStorage.clear();
  const [username, setusername] = useState("");

  if (localStorage.length == 0) {
    localStorage.setItem("user", "");
  }

  return (
    <div>
      <Structure />
      {localStorage.getItem("user") === "" ? (
        <NameForm username={username} setusername={setusername} />
      ) : (
        <Homepage />
      )}
    </div>
  );
};

export default App;
