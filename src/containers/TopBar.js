import React, { Component } from 'react';

import ProfileImage from '../components/ProfileImage';
import SocialIcon from '../components/SocialIcon';

class TopBar extends Component {
  render() {
    return (
      <div className="container">
        <div className="sub-container">
          <SocialIcon type="twitter" />
          <SocialIcon type="linkedin" />
          <SocialIcon type="github" />
          <SocialIcon type="stackoverflow" />
        </div>
        <div className="sub-container" style={{"flexGrow": 1}}>
          <ProfileImage />
        </div>
        <div className="sub-container" />
      </div>
    );
  }
}

export default TopBar;
