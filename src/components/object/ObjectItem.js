import React from 'react'

export const ObjectItem = (props) => {

  return(
    <li>
      <span>{props.name}</span>
    </li>
  )
}

ObjectItem.propTypes = {
  name: React.PropTypes.string.isRequired
}