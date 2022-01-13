import React, {useEffect, useState} from 'react';
import {getUsers} from "../services/api";
import User from "../components/User";

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers().then(value => setUsers(value));
    }, []);
    return (
        <div className='w50 border'>
            {users.map(value => <User key={value.id} user={value}/>)}
        </div>
    );
};

export default Users;