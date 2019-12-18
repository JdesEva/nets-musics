import React from 'react'
import Aside from './aside'
import Index from '../views/index/index'
import { HashRouter } from 'react-router-dom'

const Main: React.FC<any> = props => {
  return (
    <div className="nets-main">
      <HashRouter>
        <Aside></Aside>
        <div className="nets-view">
          <Index></Index>
        </div>
      </HashRouter>
    </div>
  )
}

export default Main
