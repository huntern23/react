import React, {useEffect, useState} from 'react';
import {userService} from "../../services/user.service";
import User from "../../components/User/User";
import {Outlet} from "react-router-dom";
import css from "../UsersPage/UsersPage.module.css"

const UsersPage = () => {
        const [users, setUsers] = useState([]);
        useEffect(() => {
            userService.getAll().then(value => setUsers([...value]));
        }, []);
    return (
        <div className={css.users_block}>

            <div>{users.map(user=><User key={user.id} user={user}/>)}</div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default UsersPage;