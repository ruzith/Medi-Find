import React, { useState } from "react";
import "./profile.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const Profile = () => {
  const [profilePicture, setProfilePicture] = useState(null);
  const [editing, setEditing] = useState(false);
  const [ownerName, setOwnerName] = useState("Pharmacy Owner Name");
  const [pharmacyName, setPharmacyName] = useState("Pharmacy Name");

  const handleProfilePictureUpload = (event) => {
    // Handle profile picture upload logic here
    const file = event.target.files[0];
    setProfilePicture(URL.createObjectURL(file));
  };

  const handleEditProfile = () => {
    setEditing(true);
  };

  const handleSaveProfile = () => {
    setEditing(false);
    // Save the edited profile information here
  };

  const handleOwnerNameChange = (event) => {
    setOwnerName(event.target.value);
  };

  const handlePharmacyNameChange = (event) => {
    setPharmacyName(event.target.value);
  };

  return (
    <div className="profile-container">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="profile-section">
          <div className="profile-picture">
            {profilePicture ? (
              <img src={profilePicture} alt="Profile" />
            ) : (
              <div className="placeholder">Upload a profile picture</div>
            )}
          </div>
          <div className="upload-button">
            <input
              type="file"
              id="profile-upload"
              accept="image/*"
              onChange={handleProfilePictureUpload}
            />
            <label htmlFor="profile-upload">Upload Profile Picture</label>
          </div>
          <div className="profile-details">
            <div className="component owner-name">
              {editing ? (
                <input
                  type="text"
                  value={ownerName}
                  onChange={handleOwnerNameChange}
                />
              ) : (
                <h2>{ownerName}</h2>
              )}
            </div>
            <div className="component pharmacy-name">
              {editing ? (
                <input
                  type="text"
                  value={pharmacyName}
                  onChange={handlePharmacyNameChange}
                />
              ) : (
                <h2>{pharmacyName}</h2>
              )}
            </div>
            <div className="edit-profile-button">
              {editing ? (
                <button onClick={handleSaveProfile}>Save</button>
              ) : (
                <button onClick={handleEditProfile}>Edit Profile</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
