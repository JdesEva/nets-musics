import React from 'react'

const Wrapper: React.FC<any> = props => {
  return (
    <div className="nets-wrapper-list">
      <div className="nets-title">
        <h3>{props.name}</h3>
        <div>
          <span>更多></span>
        </div>
      </div>
      {props.children}
    </div>
  )
}

export default Wrapper
