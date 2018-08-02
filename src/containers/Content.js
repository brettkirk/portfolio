import React, { Component } from 'react';

import ProjectList from './ProjectList';

class Content extends Component {
  render() {
    return (
      <div className="container center-content">
        <div className="sub-container content-box">
            { this.props.type === "aboutMe" &&
              <div>
                <div className="title">About Me</div>
                <div className="paragraph">
                  I am a full stack software engineer that is experienced 
                  with both relational and document based databases. I have 
                  experience with React, Angular, Backbone, and node. I am a 
                  fast learner, and know both the importance of producing and 
                  aintaining good documentation as well as how to efficiently 
                  navigate using new technologies without proper documentation. 
                  generally do my best in environments where effective 
                  communication is prevalent, autonomy is promoted, and 
                  collaboration is necessary.
                </div>
              </div>

              ||

              this.props.type === "projects" &&
              <div>
                <div className="title">My Projects</div>
                <ProjectList />
              </div>

              ||

              this.props.type === "tech" &&
              <div>
                <div className="title">Technologies I've Used</div>
                <div className="paragraph">
                  D3 cloud of tech icons
                </div>
              </div>
            }
        </div>
      </div>
    );
  }
}

export default Content;
