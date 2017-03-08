import React from 'react'
import {ContainerItem} from './ContainerItem'

export const ContainerList = (props) => {
  return (
    <div className="Container-List">
      <ul>
        {props.container.map(container => <ContainerItem key={container.id} {...container} />)}
      </ul>
    </div>
  )
}

ContainerList.propTypes = {
  containers: React.PropTypes.array.isRequired
}