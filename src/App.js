import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './styles/App.css';

import Users from './components/UserManagement';
import RoleManagement from './components/RoleManagement';
import PermissionsManagement from './components/PermissionsManagement';

const App = () => {
  const [roles, setRoles] = useState([
    { name: 'Admin', permissions: ['Read', 'Write', 'Delete'] },
    { name: 'Editor', permissions: ['Read', 'Write'] },
    { name: 'Viewer', permissions: ['Read'] },
  ]);

  const [users, setUsers] = useState([
    { name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
  ]);

  const handleTogglePermission = (roleName, permission) => {
    setRoles((prevRoles) =>
      prevRoles.map((role) => {
        if (role.name === roleName) {
          const updatedPermissions = role.permissions.includes(permission)
            ? role.permissions.filter((perm) => perm !== permission)
            : [...role.permissions, permission];
          return { ...role, permissions: updatedPermissions };
        }
        return role;
      })
    );
  };

  return (
    <Router>
      <div className="app-container">
        <h1>Admin Dashboard - RBAC</h1>
        <nav className="navigation">
          <Link to="/roles">Roles</Link>
          <Link to="/users">Users</Link>
          <Link to="/permissions">Permissions</Link>
        </nav>
        <Routes>
          <Route
            path="/roles"
            element={<RoleManagement roles={roles} setRoles={setRoles} />}
          />
          <Route
            path="/users"
            element={<Users users={users} setUsers={setUsers} />}
          />
          <Route
            path="/permissions"
            element={
              <PermissionsManagement roles={roles} handleTogglePermission={handleTogglePermission} />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
