import React from 'react';
import {Link} from "react-router-dom";



const Album = ({album}) => {
    const {id, title} = album;

    return (
        <div>
            <ul>
                <li>
                    <Link to={id.toString() + '/photos'}>{title}</Link>
                </li>
            </ul>
        </div>
    );
};

export default Album;