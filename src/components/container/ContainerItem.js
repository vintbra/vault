import React from 'react'
import {Link} from '../router'

export const ContainerItem = (props) => {

  return(
    <li>
      <div>
          <div><Link to={props.name}>{props.name}</Link></div>
          <div>object-count: {props.count}</div>
          <div>container-bytes: {props.bytes}</div>
      </div>
      <span>
      
      </span>
    </li>
  )
}

ContainerItem.propTypes = {
  name: React.PropTypes.string.isRequired,
  count: React.PropTypes.number.isRequired,
  bytes: React.PropTypes.number.isRequired
}