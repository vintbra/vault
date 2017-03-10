import React from 'react';
import ContainerItem from './ContainerItem'

import io from 'socket.io-client';

class ContainerList extends React.Component {
  constructor(props) {
    super(props);

    this.socket = io();
    this.state = {
      containers: []
    }

    this.getContainers.bind(this);
  }

  getContainers = () => {
    console.log('Getting containers...')
    // this.setState({
    //   containers: [
    //     {name: 'container1', count: 2, bytes: 1000},
    //     {name: 'container2', count: 25, bytes: 500000}
    //   ]
    // });
    // const last = this.state.containers.pop()
    // const last_container = typeof last === 'object' ? last.name : null

    this.socket.emit('vault:get_containers', {}, (data) => {
      this.setState({
        containers: data
      });
    });
  }

  componentDidMount() {
    console.log('ContainerList mounted...')
    this.getContainers()
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.containers.map(container => <ContainerItem key={container.id} {...container} />)}
        </ul>
      </div>
    )
  }
}

ContainerList.propTypes = {
  containers: React.PropTypes.array
}

export default ContainerList;
