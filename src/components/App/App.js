import { Component } from 'react';

import AppInfo from '../AppInfo/AppInfo';
import TaskList from '../TaskList'
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      data: [
        {id: 1, text: 'Feed cat', done: false},
        {id: 2, text: 'Buy cat food', done: false},
        {id: 3, text: 'Watch AnimalPlanet with cat', done: false}
    ]}
    this.maxId = 4;
  } 

  deleteTask = (id) => {
    this.setState(({data}) => {
      return {
        data: data.filter(item => item.id !== id)
      }
    })
  }

  addTask = (text) => {
    console.log(text);
    const newTask = {
      id: this.maxId++,
      text,
      done: false
    }
    this.setState(({data}) => {
      const newData = [...data, newTask];
      return {
        data: newData
      }
    })
  }

  toggleDone = (id, prop) => {
    this.setState(({data}) => ({
      data: data.map(item => {
          if (item.id === id) {
              return {...item, [prop]: !item[prop]}
          }
          return item;
      })
  }))
  }


  render () {
    return (
      <div className="d-flex flex-column mx-auto app">
        <AppInfo
          onAdd={this.addTask} />
        <TaskList 
          data={this.state.data}
          onDelete={this.deleteTask}
          onDone={this.toggleDone} />
      </div>
    );
  }
}

export default App;
