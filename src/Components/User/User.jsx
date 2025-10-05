import React from 'react';
import { Link, useNavigate } from 'react-router';

const User = ({ user }) => {

    const { id, name, email } = user;
    
    const navigate = useNavigate();
    const handleClick = () => navigate(`/users/${id}`);
    return (
        <div className='border p-5'>
            <h3 className='mt-0'>Name: {name}</h3>
            <h5 className='mt-0 text-xs'>E-mail: {email}</h5>
            <hr className='mb-3' />
            <button className='border px-1.5' onClick={handleClick}>Show user details</button>
        </div>
    );
};

export default User;