import { useState, useEffect } from "react";

function Text() {
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("component mounted");

    return () => {
      console.log("component UNMOUNTED");
    };
  }, []);
  return (
    <div>
      <input
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
      <h1>{text}</h1>
    </div>
  );
}

export default Text;
