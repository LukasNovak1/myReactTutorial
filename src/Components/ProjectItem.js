import React, { Component } from 'react';

class ProjectItem extends Component {
  handleDelete(id) {
    this.props.onDeleteProject(id);
  }

  render() {
    return (
      <li className="ProjectItem" key={this.props.project.projectName}>
        <strong>Name</strong>: {this.props.project.projectName}, <strong>Group</strong>: {this.props.project.projectGroup}
        &nbsp;&nbsp;&nbsp; <a href="#" onClick={this.handleDelete.bind(this, this.props.project.id)} >delete</a>
      </li>
    );
  }
}

export default ProjectItem;
