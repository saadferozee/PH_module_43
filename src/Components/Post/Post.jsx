import React from 'react';

const Post = ({post}) => {
    // console.log(post);
    return (
        <div className='border m-4 p-2.5'>
            <h4>Title: <b>{post.title}</b></h4>
            <br />
            <hr />
            <p>{post.body}</p>
        </div>
    );
};

export default Post;