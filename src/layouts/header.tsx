import React, { useState, useEffect } from 'react'
import { makeDraggable } from '../utils/utils'

const Header: React.FC<any> = (props: any) => {
  const [value, setValue] = useState<string>('')

  useEffect(() => {
    makeDraggable('.nets-header')
  }, [])

  return (
    <div className="nets-header">
      <div className="nets-logo"></div>
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
          placeholder="搜索音乐，视频，歌词，电台"
          onChange={(ev: any) => setValue(ev.target.value)}
        />
        <i className="iconfont icon-search"></i>
      </div>
    </div>
  )
}

export default Header
