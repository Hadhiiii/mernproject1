import React from 'react';
import './Profile.css'; // Import a CSS file for styling

function Profile(){
  return (
    <div className="profile-container">
      <header className="profile-header">
        <h1>My Profile</h1>
      </header>
      <section className="profile-content">
        <div className="profile-picture">
        
        </div>
        <div className="profile-details">
          <p><strong>Email:</strong> </p>
          <p><strong>Bio:</strong> </p>
          <p><strong>Joined:</strong> </p>
        </div>
      </section>
    </div>
  );
};

export default Profile;
