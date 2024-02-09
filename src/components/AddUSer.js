
import React, { useState } from 'react';

const AddUser = ({ onAddUSer }) => {
  const [userName, setuserName] = useState('');
  const [gender, setgender] = useState('');
  const [dateOfBirth, setdateOfBirth] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddUSer({ userName,gender,dateOfBirth });
    setuserName('');
    setgender('');
    setdateOfBirth('');
  };

  return (
    <div>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userName" className="form-label">
            User Name
          </label>
          <input
            type="text"
            className="form-control"
            id="userName"
            value={userName}
            onChange={(e) => setuserName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="gender" className="form-label">
          gender
          </label>
          <textarea
            className="form-control"
            id="gender"
            rows="3"
            value={gender}
            onChange={(e) => setgender(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="dateOfBirth" className="form-label">
           Date Of Birth
          </label>
          <input
            type="date"
            className="form-control"
            id="dateOfBirth"
            value={dueDate}
            onChange={(e) => setdateOfBirth(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddEvent;
