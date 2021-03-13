import React from 'react';
import User from '../User/User';

const Users = (props) => {
    const users = props.users;
    //  console.log(user);
    return (
        <div>
            {
              users.map(user => <User user ={user}></User> )
            }
        </div>
    );
};

export default Users;