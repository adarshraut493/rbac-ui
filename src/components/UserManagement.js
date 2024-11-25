import React, { useState } from 'react';

const UserManagement = ({ users, setUsers }) => {
  const [newUser, setNewUser] = useState({ name: '', email: '', role: '', status: 'Active' });

  const handleAddUser = () => {
    if (newUser.name && newUser.email && newUser.role) {
      setUsers([...users, newUser]);
      setNewUser({ name: '', email: '', role: '', status: 'Active' });
    }
  };

  const handleDeleteUser = (email) => {
    setUsers(users.filter((user) => user.email !== email));
  };

  return (
    <div>
      <h2>User Management</h2>
      <div>
        <h3>Add New User</h3>
        <input
          type="text"
          placeholder="Name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="Role"
          value={newUser.role}
          onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
        />
        <button onClick={handleAddUser}>Add User</button>
      </div>
      
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button onClick={() => handleDeleteUser(user.email)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
