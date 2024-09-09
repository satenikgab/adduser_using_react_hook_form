export const UserItem = ({user}) => {
    
    return <>
    <tr>
              <td>{user.name}</td>
                <td>{user.surname}</td>
                    <td>{user.age}</td>
                    <td>{user.login}</td>
                    </tr>
      
    </>
  }