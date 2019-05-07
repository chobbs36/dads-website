import React from 'react';

const Comment = (props) => {
    const { name, message, time } = props.comment;

    return (
        <div>
            <small>{time}</small>
            <h6>{name}</h6>
            {message}
        </div>
    )
};

export default Comment;