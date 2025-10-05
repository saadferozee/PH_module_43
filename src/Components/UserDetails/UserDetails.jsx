import React from 'react';
import { Link, useLoaderData } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData();
    // console.log(user);
    const {name, email, phone, website} = user;
    return (
        <div>
            <h3>Name: {name}</h3>
            <h3>E-mail: {email}</h3>
            <h3>Phone: {phone}</h3>
            <h3>Website: {website}</h3>

            <hr />
            <br />
            <Link className='border px-2' to={'/users'}>Back to users</Link>
        </div>
    );
};

export default UserDetails;