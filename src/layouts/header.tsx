import React, { useState, useEffect } from 'react'

const Header: React.FC<any> = (props: any) => {
  const [value, setValue] = useState<string>('')

  useEffect(() => {
    setValue('你好啊' + Math.random())
    console.log(11111)
  }, [])

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
        <input
          value={value}
          type="text"
          onChange={(ev: any) => setValue(ev.target.value)}
        />
        <div>{value}</div>
      </div>
    </div>
  )
}

export default Header
