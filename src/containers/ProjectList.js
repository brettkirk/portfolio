import React, { Component } from 'react';

import Project from '../components/Project';

class Content extends Component {
  render() {

    let projects = [
      {
        name: 'Example Project',
        tagline: 'This displays below the project preview.',
        description: 'This is an example project. You should see this when you click on the project. This should open in a modal with the project loading in the background. Once the project loads you can then press continue to try a demo of it.',
        previewImage: '/images/projects/example.png'
      },
      {
        name: 'Example Project',
        tagline: 'This displays below the project preview.',
        description: 'This is an example project. You should see this when you click on the project. This should open in a modal with the project loading in the background. Once the project loads you can then press continue to try a demo of it.',
        previewImage: '/images/projects/example.png'
      },
      {
        name: 'Example Project',
        tagline: 'This displays below the project preview.',
        description: 'This is an example project. You should see this when you click on the project. This should open in a modal with the project loading in the background. Once the project loads you can then press continue to try a demo of it.',
        previewImage: '/images/projects/example.png'
      },
      {
        name: 'Example Project',
        tagline: 'This displays below the project preview.',
        description: 'This is an example project. You should see this when you click on the project. This should open in a modal with the project loading in the background. Once the project loads you can then press continue to try a demo of it.',
        previewImage: '/images/projects/example.png'
      },
      {
        name: 'Example Project',
        tagline: 'This displays below the project preview.',
        description: 'This is an example project. You should see this when you click on the project. This should open in a modal with the project loading in the background. Once the project loads you can then press continue to try a demo of it.',
        previewImage: '/images/projects/example.png'
      },
      {
        name: 'Example Project',
        tagline: 'This displays below the project preview.',
        description: 'This is an example project. You should see this when you click on the project. This should open in a modal with the project loading in the background. Once the project loads you can then press continue to try a demo of it.',
        previewImage: '/images/projects/example.png'
      },
    ];

    return (
      <div className="container">
        {
          projects.map((project,key) =>
            <div>
              <Project project={project} key={key} />
            </div>
          )
        }
      </div>
    );
  }
}

export default Content;
