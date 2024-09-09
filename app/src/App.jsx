
import {useState} from "react"
import { UserContext } from "./context"
import { UserList } from "./components/UserList"
import { AddUser } from "./components/AddUser"
import "./App.css";
function App(){

  const [users, setUsers] = useState([
    {id:101, name:"James", surname:"Brown", age:23, login: "james@gmail.com", password:"james123"},
    {id: 102, name: "Alice", surname: "Smith", age: 29, login: "alice.smith@example.com", password: "alice1234"},
    {id: 103, name: "Robert", surname: "Johnson", age: 35, login: "robert.johnson@example.com", password: "robert5678"},
    {id: 104, name: "Emily", surname: "Davis", age: 26, login: "emily.davis@example.com", password: "emily8765"},
    {id: 105, name: "Michael", surname: "Wilson", age: 32, login: "michael.wilson@example.com", password: "michael4321"}

  ]);

  const addUser = (user) => {
    setUsers([...users, user]);
  }

 


  return <>
  <UserContext.Provider value={{users, addUser, notify}}>
    <AddUser/>
    <UserList/>
   
  </UserContext.Provider>
  </>
}
export default App