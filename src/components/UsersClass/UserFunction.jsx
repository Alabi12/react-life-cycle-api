import axios from 'axios';
import React, { useState, useEffect} from 'react';

const UserFunction = () => {
    let myUsers = [];
    const [users, setUsers] = useState(myUsers);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
            console.log(res);
            setUsers(res.data)
        })
        .catch((err) => 
            console.log(err));
        
    });

    return (
        <div>
            <h1>All Users</h1>
            <hr />
            <div>
                   {users.map(user => <div>
                       <p>{user. name}</p>
                       <p>{user. username}</p>
                       <p>{user. email}</p>
                       <hr/>
                   </div>)}
               </div>
        </div>
    );
};

export default UserFunction;


