import { useContext } from "react"
import { UserContext } from "../context"
import { UserItem } from "./UserItem";


export const UserList = () => {

    const {users} = useContext(UserContext);
    return <>

     <table className="table">
        <thead>
            <tr>
                <th>name</th>
                <th>surname</th>
                <th>age</th>
                <th>login</th>

            </tr>
        </thead>
        <tbody>
            {
               users.map(user => <UserItem key={user.id} user = {user}/>)
            }
        </tbody>
     </table>
    </>
  }