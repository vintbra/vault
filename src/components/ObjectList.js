import React from 'react'

import io from 'socket.io-client';

class ObjectList extends React.Component {
  constructor(props) {
    super(props);

    this.socket = io();
    this.state = {
      objects: []
    }

    this.getObjects.bind(this);
  }

  getObjects = (containerName) => {
    console.log('Getting objects...')

    this.socket.emit('vault:get_objects', {container: containerName}, (data) => {
      this.setState({objects: data});
    });
  }

  componentDidMount() {
    console.log('ObjectList mounted...')
    const containerName = this.props.params.containerName;
    this.getObjects(containerName)
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.objects.map(function(object) {
          return (
            <li key={object.id}>
              {object.name}
            </li>
          );
        })}
        </ul>
      </div>
    )
  }
}

export default ObjectList;
