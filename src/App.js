
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddUser from './components/AddUSer';
import UserList from './components/UserList';

const App = () => {
  const [users, setUSers] = useState([]);

  const handleAddEvent = (newuser) => {
    setEvents([...users, newUser]);
  };

  return (
    <div className="container mt-4">
      <AddUser onAdduser={handleAddUser} />
      <hr />
      <UserList users={users} />
    </div>
  );
}

export default App;
