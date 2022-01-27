import React from 'react';
import {Link} from "react-router-dom";
import css from "../User/User.module.css"

const User = ({user}) => {
    const {id, name} = user;
    return (
        <div className={css.users_block}>

            <Link to={id.toString()} state={user} >Name: {name}</Link>
            <Link to={id.toString() + '/albums'}>
                <button>User albums</button>
            </Link>
        </div>
    );
};

export default User;