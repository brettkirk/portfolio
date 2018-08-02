import React, { Component } from 'react';

let profileImage = "https://avatars1.githubusercontent.com/u/29087063?s=760&v=4"

class ProfileImage extends Component {
  render() {
    return (
      <img src={profileImage} className="profile-image" alt="Brett Kirk" />
    );
  }
}

export default ProfileImage;
