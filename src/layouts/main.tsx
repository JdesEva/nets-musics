import React from 'react'
import Aside from './aside'

const Main: React.FC<any> = (props: any) => {
  return (
    <div className="nets-main">
      <Aside></Aside>
      <div className="nets-view">11</div>
    </div>
  )
}
export default Main
