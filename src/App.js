import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const names = ['moin', 'rifat', 'minhaz', 'nazmul', 'mahir'];
  const ages = [18, 19, 17, 15, 18];
  const devices = ["laptop", "desktop", "calculator", 'mobile'];
  const future = [
    { HSC: '5.00', CGPA: '3.89', masters: 'javaScript' },
    { HSC: '5.00', CGPA: '3.89', masters: 'Army' },
    { HSC: '5.00', CGPA: '3.89', masters: 'BCS' },
    { HSC: '5.00', CGPA: '3.89', masters: 'gamer' },
    { HSC: '5.00', CGPA: '3.89', masters: 'engineer' },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {
            devices.map(device => <li>{device}</li>)
          }
        </ul>
        <Counter></Counter>
        <Users></Users>
        <Person name="moin" age={ages[0]} futurePlane={future[0]}>     </Person>
        <Person name={names[1]} age='19' futurePlane={future[1]}>      </Person>
        <Person name={names[2]} age={ages[2]} futurePlane={future[2]}> </Person>
        <Person name="nazmul" age={ages[3]} futurePlane={future[3]}>   </Person>
        <Person name={names[4]} age={ages[4]} futurePlane={future[4]}> </Person>
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(0);
  // // type 1:
  // const handleClick = () => {
  //   // const newCount = count + 1;
  // // setCount(newCount);
  //  // type 2: 
  //   setCount(count + 1);
  // };
  return(
    <div>
      <h1>Count: {count}</h1>
      {/* type: 3 */}
      <button onClick= {() => setCount(count + 1)}>increase</button>
      <button onClick= {() => setCount(count - 1)}>decrease</button>
    </div>
  )
}

// function Users(){
//   const [users, setUsers] = useState([]);
//   useEffect(() =>{
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => setUsers(data));
//   }, []);
//   return(
//     <div>
//       <h1> Dynamic User: {users.length} </h1>
//     <ul>
//       {
//         users.map( user => <li>{user.name}</li> )
//       }
//     </ul>
//     </div>
//   )
// }

function Users(){
  const [users, stateUsers] = useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => stateUsers(data))
  }, []);
  return(
    <div>
      <h1>user Count: {users.length}</h1>
      <ul>
        {
          users.map(user => <li>{user.email}</li> )
        }
      </ul>
    </div>
  )
}

function Person(props) {
  const personStyle = {
    border: '2px solid yellow',
    margin: '20px',
    padding: '20px',
    minWidth: '600px'
  };
  // console.log(props.futurePlane);
  const { HSC, CGPA, masters } = props.futurePlane;
  return (
    <div style={personStyle}>
      <h1>name:{props.name} </h1>
      <h2>age: {props.age}</h2>
      <h2>HSC: {" " + HSC}</h2>
      <h2>CGPA: {" " + CGPA}</h2>
      <h2>masters in: {" " + masters}</h2>
    </div>
  );
}

export default App;
