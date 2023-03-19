import "./App.css";
// import User from "./components/User";
import Planets from "./components/Planets";

function App() {
  return (
    <div className="App">
      <Planets />
    </div>
  );
}

export default App;

// const props = {
//   name: "andrija",
//   age: 21,
//   email: "andrija@gmail.com",
// };

// const User = (props) => {
//   return (
//     <div>
//       <p>{props.name}</p>
//       <p>{props.age}</p>
//       <p>{props.email}</p>
//     </div>
//   );
// };
