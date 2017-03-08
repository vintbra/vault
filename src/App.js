import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {ContainerList} from './components/container'
import {ObjectList} from './components/object'

import io from 'socket.io-client';

class App extends Component {
  constructor(props) {
    super(props);

    this.socket = io();
    this.state = {
      containers: [],
      objects: [],
      current: 1,
      total: 9862
    }

    this.getContainers.bind(this);
    this.getObjects.bind(this);
    this.onChange.bind(this);
  }

  static contextTypes = {
    route: React.PropTypes.string
  }

  getContainers = (page) => {
    console.log('getting containers...')
    const last = this.state.containers.pop()
    const last_container = typeof last === 'object' ? last.name : null

    this.socket.emit('vault:get_containers', {marker: last_container}, (data) => {
      this.setState({
        containers: data,
        current: page
      });
    });
  }

  getObjects = () => {
    console.log('getting objects...')
    this.socket.emit('vault:get_objects', {container: this.context.route}, (data) => {
      this.setState({objects: data});
    });
  }

  onChange = (page) => {
  //   this.getContainers(page)
  }

  componentDidMount() {
    if (this.context.route === '/') this.getContainers(1)
    else this.getObjects()
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Swift Manager</h2>
        </div>
        <div>
          <ContainerList
            container={this.state.containers}/>
          <ObjectList
            objects={this.state.objects}/> 
        </div>
      </div>
    );
  }
}

export default App;
