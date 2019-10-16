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
        <span onClick={() => console.log(1)}>
          <i className="icon-goLeft1 iconfont"></i>
        </span>
        <span onClick={() => console.log(2)}>
          <i className="icon-goLeft iconfont"></i>
        </span>
      </div>
      <div className="nets-search">
        <input type="text" />
      </div>
    </div>
  )
}

export default Header
