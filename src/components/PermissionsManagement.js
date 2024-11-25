import React from 'react';

const PermissionsManagement = ({ roles, handleTogglePermission }) => {
 
  

  if (!Array.isArray(roles)) {
    return <div>Loading roles...</div>;
  }

  return (
    <div>
      <h2>Permissions Management</h2>
      
      <table>
        <thead>
          <tr>
            <th>Role Name</th>
            <th>Permissios</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role, index) => (
            <tr key={index}>
              <td>{role.name}</td>
              
              <td>
                {['Read', 'Write', 'Delete'].map((permission) => (
                  <label key={permission} style={{ marginRight: '10px' }}>
                    <input
                      type="checkbox"
                      checked={role.permissions.includes(permission)}
                      onChange={() => handleTogglePermission(role.name, permission)}
                    />
                    {permission}
                  </label>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PermissionsManagement;
