import React, { useContext } from 'react';
import MyContext from './Mycontext';

const AllData = () => {
  const ctx = useContext(MyContext);

  return (
    <div>
      <h2>All User Data</h2>
      <ul>
        {ctx.users.map((user, index) => (
          <li key={index}>
            <strong></strong> {user.name}<br />
            <strong></strong> {user.email}<br />
            <strong></strong> {user.balance}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllData;