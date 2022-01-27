import React from 'react';



const UserPost = ({post}) => {
    const {id, userId, title, body} = post;

    return (
        <div>
            <div><b>Id:</b> {id}</div>
            <div><b>userId:</b> {userId}</div>
            <div><b>Title:</b> {title}</div>
            <div><b>Body:</b> {body}</div>
        </div>
    );
};

export default UserPost;