import React, { useState } from 'react';

const RoleManagement = ({ roles, setRoles }) => {
  const [newRole, setNewRole] = useState('');

  const handleAddRole = () => {
    if (newRole && !roles.some((role) => role.name === newRole)) {
      setRoles([...roles, { name: newRole, permissions: [] }]);
      setNewRole('');
    }
  };

  const handleDeleteRole = (roleName) => {
    setRoles(roles.filter((role) => role.name !== roleName));
  };

  return (
    <div>
      <h2>Role Management</h2>
      <div>
        <h3>Add New Role</h3>
        <input
          type="text"
          placeholder="New Role"
          value={newRole}
          onChange={(e) => setNewRole(e.target.value)}
        />
        <button onClick={handleAddRole}>Add Role</button>
      </div>
      
      <table>
        <thead>
          <tr>
            <th>Role Name</th>
            <th>Permissions</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role, index) => (
            <tr key={index}>
              <td>{role.name}</td>
              <td>{role.permissions.join(', ')}</td>
              <td>
                <button onClick={() => handleDeleteRole(role.name)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoleManagement;
