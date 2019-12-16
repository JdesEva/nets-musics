import React from 'react'
import Aside from './aside'
import Index from '../views/index/index'

const Main: React.FC<any> = props => {
  return (
    <div className="nets-main">
      <Aside></Aside>
      <div className="nets-view">
        <Index></Index>
      </div>
    </div>
  )
}

export default Main
