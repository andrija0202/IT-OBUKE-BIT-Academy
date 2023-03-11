// import React from "react";
import "./App.css";
import Blogs from "./components/Blogs";
import { useState } from "react";
// import "./index.css";

const App = () => {
  const [blogs] = useState([
    {
      id: 1,
      name: "10 best things to do",
      bodyText: `By calling this.setState from an onClick handler
      in the Square’s render method, we tell React to re-render
       that Square whenever its <button> is clicked. After the update,
        the Square’s this.state.value will be 'X', so we’ll see
         the X on the game board. If you click on any Square,
          an X should show up.`,
    },
    {
      id: 2,
      name: "101 best things to do",
      bodyText: `By calling this.setState from an onClick handler
      in the Square’s render method, we tell React to re-render
       that Square whenever  If you click on any Square,
          an X should show up.`,
    },
    {
      id: 3,
      name: "Zasto sam bolji od Rade?!?!",
      bodyText: `By calling this.setState from an onClick handler
      in the Square’s render method, we tell React to re-render
       that Square whenever  If you click on any Square,
          an X should show up.`,
    },
  ]);

  return (
    <div className="app">
      <h1 className="title">My React Blog</h1>
      <Blogs blogs={blogs} />
    </div>
  );
};

export default App;
