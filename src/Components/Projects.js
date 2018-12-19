import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {  
  onDeleteProject(id) {
    this.props.onDeleteProject(id);
  }

  render() {    
    var projectItems;   
    
    if (this.props.projects) {
      projectItems = this.props.projects.map(project => {        
        return (          
            <ProjectItem key={project.projectName} project={project} onDeleteProject={this.onDeleteProject.bind(this)} />          
        );
      });
    }

    return (
      <div className="Projects">
        <h2>{this.props.componentTitle}</h2>
        <ul>
          {projectItems}
        </ul>
      </div>      
    );
  }
}

export default Projects;
