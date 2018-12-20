import React, { Component } from 'react';
import Uuid from 'uuid'

//bootstrap components


class ProjectAdd extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      newProject: {}
    }
  }

  static defaultProps = {
    categories: ['-', 'Auta', 'Letadla', 'Motorky', 'Lodě']
  }

  onClick() {
    if (this.refs.projectName.value) {
      if (this.refs.projectGroup.value !== '-') {
        this.setState({
          newProject: {
            id: Uuid.v4(),
            projectName: this.refs.projectName.value,
            projectGroup: this.refs.projectGroup.value
          }
        }, function () {
          //nastavim property komponenty ProjectAdd, abych jeji hodnotu mohl poslat nahoru
          this.props.onAddProject(this.state.newProject);
        }
        )
      } else {
        alert('vyberte id');
      }
    } else {
      alert("zadejte title");
    }
    console.log(this.refs.projectName.value);

  }

  render() {
    let options = this.props.categories.map(cat => {      
      return (
        <option value={cat} key={cat}>{cat}</option>          
      );
    });

    return (
      <div className="ProjectAdd componentHighlight">
        <h3> {this.props.componentTitle} </h3>
        <div>
          <label>Project name: </label>
          <input type="text" ref="projectName" />
        </div>
        <div>
          <label>projectGroup: </label>
          <select ref="projectGroup">
            {options}
          </select>
        </div>
        <div>          
          <input type="button" onClick={this.onClick.bind(this)} value="Create" />
        </div>
      </div>      
    );
  }
}

export default ProjectAdd;
