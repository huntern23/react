import React, {useEffect, useState} from 'react';
import {Link, Outlet, useLocation, useParams} from "react-router-dom";
import {PostService} from "../../services/post.service";

const SinglePostPage = () => {
   const {id} = useParams();
   const [post,setPost] = useState(null);
const {state} = useLocation();



   useEffect(()=>{
       if(state){
           setPost(state)
           return
       }
       PostService.getById(id).then(value => setPost({...value}))
   },[id])
    return (
        <div>
            {post && (
                <div>
                    <div>Id: {post.id}</div>
                    <div>UserId: {post.userId}</div>
                    <div>Title: {post.title}</div>
                    <div>BodyId: {post.body}</div>
                </div>
            )}
            <Link to={'comments'}>
                <button>Comments</button>
            </Link>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default SinglePostPage;