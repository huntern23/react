import React, {useEffect, useState} from 'react';
import {Link, Outlet, useLocation, useParams} from "react-router-dom";
import {PostService} from "../../services/post.service";
import {userService} from "../../services/user.service";

const SingleUserPage = () => {
    const {id} = useParams();
    const [user,setUser] = useState(null);
    const {state} = useLocation();



    useEffect(()=>{
        if(state){
            setUser(state)
            return
        }
        userService.getById(id).then(value => setUser({...value}))
    },[id])
    return (
        <div>
            {user && (
                <div>
                    <div>Id: {user.id}</div>
                    <div>Name: {user.name}</div>
                    <div>Username: {user.username}</div>
                    <div>Email: {user.email}</div>
                </div>
            )}
            <Link to={'userPosts'}>
                <button>User posts</button>
            </Link>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default SingleUserPage;