import logo from './logo.svg';
import './App.css';
import AddUserForm from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
import { React,useState } from 'react';


function App() {
  const [usersList, setUsersList] = useState([])

  const addUserHandler=(userName,userAge)=>
  {
    setUsersList((prevUsersList)=>{
      return [...prevUsersList,{name:userName,age:userAge,id:Math.random().toString()}]
    })
  }
  return (
    <div className="App">
      <AddUserForm onAddUser={addUserHandler} />
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
