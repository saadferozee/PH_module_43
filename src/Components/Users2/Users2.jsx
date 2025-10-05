import React, { use } from 'react';
import User from '../User/User';

const Users2 = ({userDataPromise}) => {
    const userData = use(userDataPromise);
    // console.log(userData);
    return (
        <div className='w-full grid grid-cols-2 gap-3.5'>
            {
                userData.map(user => <User key={user.id} user={user}></User>)
            }
        </div>
    );
};

export default Users2;