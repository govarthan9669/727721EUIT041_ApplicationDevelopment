import React from 'react';

const UserDetailsBox = ({ user }) => {
  return (
    <div className="userDetailsBox">
      <h2>User Details</h2>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
      {/* Add more user details as needed */}
    </div>
  );
};

export default UserDetailsBox;
