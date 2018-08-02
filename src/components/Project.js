import React, { Component } from 'react';

class Title extends Component {
  render() {
    return (
      <div className="project-tagline" key={this.props.key}>
        <img  className="project-image" src={this.props.project.previewImage} alt={this.props.project.name} />
        {this.props.project.tagline}
      </div>
    );
  }
}

export default Title;
