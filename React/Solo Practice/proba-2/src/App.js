import "./App.css";
import Axios from "axios";
import { useState, useEffect } from "react";

function App() {
  // fetch("https://catfact.ninja/fact")
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data);
  //   });

  // const [catFact, setCatFact] = useState("");

  // const fetchCatData = () => {
  //   Axios.get("https://catfact.ninja/fact").then((res) => {
  //     setCatFact(res.data.fact);
  //   });
  // };

  // useEffect(() => {
  //   Axios.get("https://catfact.ninja/fact").then((res) => {
  //     setCatFact(res.data.fact);
  //   });
  // }, []);
  const [name, setName] = useState("");
  const [preAge, setPreAge] = useState(null);
  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      // console.log(res.data);
      setPreAge(res.data);
    });
  };

  return (
    <div className="App">
      {/* <button onClick={fetchCatData}>Generate Cat Fact</button>
      <p>{catFact}</p> */}
      <input
        type="text"
        placeholder="Ex. Pedro..."
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <button onClick={fetchData}> Predict Age</button>
      <h1>Name: {preAge?.name}</h1>
      <h1>Predicted Age: {preAge?.age}</h1>
      <h1>Count: {preAge?.count}</h1>
    </div>
  );
}

export default App;
