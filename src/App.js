import { useEffect, useState } from "react";
import "./App.css";



function App() {
  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <User></User>
    </div>
  );
}

function User() {
  const [person , setPerson] = useState([]);

  useEffect( ()=>{

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setPerson(data))

  } , []);

  
  return(
    <div className="">
      <h1>user : {person.length}</h1>
      {
        person.map(data => <UserData name = {data.name} email= {data.email}></UserData>)
      }
    </div>
  )
}

function UserData(props) {
  return(
    <div className="" style={{padding:'15px' , border:"3px solid red" , margin:'10px'}}>
      <h1>user Name : {props.name}</h1>
      <p>user Email : {props.email}</p>
    </div>
  )
}

// function Counter() {

//   const [num , setNum] = useState(0);
//   const increase = () => setNum(num + 1 )
//   const decrease = () => setNum(num - 1 )

//   return(
//     <div className="">
//         <h1>count : {num} </h1>
//         <button onClick={increase}>increase</button>
//         <button onClick={decrease}>decrease</button>
//     </div>
//   )
// }

export default App;
// Fira Code, Operator Mono


