// import React from "react";
// import Axios from "axios";
// import { useState, useEffect } from "react";
// import PersonCard from "./PersonCard";

// function FetchInfo(props) {
//   const [dataNew, setDataNew] = useState([]);

//   useEffect(() => {
//     Axios.get("https://randomuser.me/api/?results=15").then((res) => {
//       // console.log(res.data.results);
//       setDataNew(res.data.results);
//       // console.log(dataNew);
//     });
//   }, []);
//   props.onData(dataNew);

//   return (
//     <div className="list-wrap">
//       {dataNew.map((user) => (
//         <PersonCard
//           name={user.name.first}
//           last={user.name.last}
//           email={user.email}
//           dob={user.dob.date}
//           img={user.picture.thumbnail}
//         />
//       ))}
//     </div>
//   );
// }

// export default FetchInfo;
