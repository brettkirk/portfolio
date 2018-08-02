import React, { Component } from 'react';

class SocialIcon extends Component {
  render() {
    const socialData = {
      twitter: {
        source: 'images/twitter.png',
        name: 'Twitter',
        url: 'https://twitter.com/Brett_Kirk1'
      },
      github: {
        source: 'images/github.png',
        name: 'GitHub',
        url: 'https://github.com/brettkirk'
      },
      linkedin: {
        source: 'images/linkedin.png',
        name: 'linkedIn',
        url: 'https://www.linkedin.com/in/brett-kirk/'
      },
      stackoverflow: {
        source: 'images/stackoverflow.png',
        name: 'stack overflow',
        url: 'https://stackoverflow.com/users/10168408/brett-kirk'
      },
    };

    let data = socialData[this.props.type];

    return (
      <a href={data.url}>
        <img 
          src={data.source} 
          className="social-icon" 
          alt={data.name} 
          title={data.name} 
        />
      </a>
    );
  }
}

export default SocialIcon;
