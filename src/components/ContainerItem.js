import React from 'react';
import { Link } from 'react-router';

class ContainerItem extends React.Component {
  render() {
    return(
      <li>
        <div>
            <div><Link to={'/' + this.props.name}>{this.props.name}</Link></div>
            <div>Objects: {this.props.count}</div>
            <div>Size: {this.props.bytes} bytes</div>
        </div>
      </li>
    )
  }
}

ContainerItem.propTypes = {
  name: React.PropTypes.string.isRequired,
  count: React.PropTypes.number.isRequired,
  bytes: React.PropTypes.number.isRequired
}

export default ContainerItem;
