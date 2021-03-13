import logo from './logo.svg';
import './App.css';

// --import local made data --//
import userData from './fakeData/fakeData.json';
import { useEffect, useState } from 'react';
import Users from './Users/Users';


function App() {

  // --store the data load data into a state --//
  const [users, setUsers] = useState([]);
  // --data load --//
  useEffect(() => {
   setUsers(userData);
  }, [])
 
  return (
    <div>
      <Users users ={users}></Users>
    </div>
  );
}

export default App;
