import React from 'react'
import { useMount } from 'react-use'

const Card: React.FC<any> = props => {
  useMount(() => {
    console.log(props)
  })

  return (
    <div className="nets-card">
      <img src={props.data.picUrl} alt="" />
      <p>{props.data.name}</p>
    </div>
  )
}

export default Card
