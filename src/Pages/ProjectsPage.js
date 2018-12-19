import React, { Component } from 'react';
import Uuid from 'uuid'

//custom components
import Projects from '../Components/Projects'
import ProjectAdd from '../Components/ProjectAdd'

//bootstrap components


class Page1Page extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    }
  }

  componentWillMount() {
    //Metoda se vola vzdy po refreshi
    this.setState({
      projects: [
        {
          id: Uuid.v4(),
          projectName: 'Project1',
          projectGroup: 'Auta'
        }, {
          id: Uuid.v4(),
          projectName: 'Project2',
          projectGroup: 'Letadla'
        }, {
          id: Uuid.v4(),
          projectName: 'Project3',
          projectGroup: 'Letadla'
        }
      ]
    })
  }

  onAddProject(project) {
    //tato metoda je volana kdyz nastane udalost addProject
    let projects = this.state.projects;
    projects.push(project);
    this.setState({ projects: projects });
  }

  onDeleteProject(id) {
    let projects = this.state.projects;
    let indexToDelete = projects.findIndex(i => i.id === id);
    projects.splice(indexToDelete, 1);


    this.setState({ projects: projects });
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>Projects</h1>
            </div>
          </div>
        </div>

        <div className="container well">
          <div className="row">
            <div className="col">
              <ProjectAdd componentTitle="Add new project" onAddProject={this.onAddProject.bind(this)} />             
              
            </div>
          </div>
        </div>

        <div className="container well">
          <div className="row">
            <div className="col">
              <Projects componentTitle="Nadpis projects přes props" projects={this.state.projects} onDeleteProject={this.onDeleteProject.bind(this)} />          
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Page1Page;