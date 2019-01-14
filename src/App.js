import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(){
    super()
    this.state = {

      Classroom:[],
      Teacher:[],
      Child:[]
    }
  }
  getClassrooms() {
    fetch('http://localhost:8080/api/classrooms/').then(res => res.json())
        .then(data => {
            console.log(data);
            this.setState({ Classroom: data })
        })
}
getTeachers() {
  fetch('http://localhost:8080/api/teachers/').then(res => res.json())
      .then(data => {
          console.log(data);
          this.setState({ Teacher: data })
      })
}
getChild() {
  fetch('http://localhost:8080/api/children/').then(res => res.json())
      .then(data => {
          console.log(data);
          this.setState({ Child: data })
      })
}
componentWillMount(){
  this.getClassrooms()
  this.getTeachers()
  this.getChild()
}
  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
