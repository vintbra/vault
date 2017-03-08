import React from 'react'
import {ObjectItem} from './ObjectItem'

export const ObjectList = (props) => {
  return (
    <div className="Object-List">
      <ul>
        {props.objects.map(object => <ObjectItem key={object.id} {...object} />)}
      </ul>
    </div>
  )
}

ObjectList.propTypes = {
  objects: React.PropTypes.array.isRequired
}