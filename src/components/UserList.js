
import React from 'react';

const UserList = ({ users }) => 
{
  return (
    <div>
      <h2>User List</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">User Name</th>
            <th scope="col">Gender</th>
            <th scope="col">Date Of Birth</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.userName}</td>
              <td>{user.gender}</td>
              <td>{user.dateOfBirth}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
