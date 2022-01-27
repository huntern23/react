import React from 'react';



const Comment = ({comment}) => {
    const {id, name, email, body} = comment;

    return (
        <div>
            <div><b>Id:</b> {id}</div>
            <div><b>Name:</b> {name}</div>
            <div><b>Email:</b> {email}</div>
            <div><b>Body:</b> {body}</div>
        </div>
    );
};

export default Comment;