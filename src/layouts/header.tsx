import React from 'react'

const Header: React.FC<any> = (props: any) => {
  return (
    <div className="nets-header">
      <div className="nets-logo">
        <p>
          <a href="/#">网易云音乐</a>
        </p>
      </div>
      <div className="nets-pagination">
        <input type="text" />
      </div>
    </div>
  )
}
export default Header
