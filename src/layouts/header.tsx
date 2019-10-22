import React, { useState, useEffect } from 'react'
import { __Dragable } from '../utils/utils'
import electron from '../utils/electron'

const Header: React.FC<any> = props => {
  const [value, setValue] = useState<string>('')
  const [max, setMax] = useState<boolean>(false)

  /**
   * 窗口操作
   * @param {string} |close|minimize|maximize|unmaximize| - 操作类型
   */
  const _operateWindow = (param: string): void => {
    const win = electron.remote.getCurrentWindow()
    win[param]()
    console.log(param)
  }

  /**
   * 最大化最小化操作
   */
  const _doggleMax = (): void => {
    if (max) {
      _operateWindow('unmaximize')
    } else {
      _operateWindow('maximize')
    }
    setMax(!max)
  }

  useEffect(() => {
    __Dragable('.nets-header')
  }, [])

  return (
    <div className="nets-header">
      <div>
        <div className="nets-logo">
          <p>mini</p>
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
            placeholder="搜索音乐，视频，歌词，电台"
            onChange={(ev: any) => setValue(ev.target.value)}
          />
          <i className="iconfont icon-search"></i>
        </div>
      </div>
      <div>
        <div className="nets-user">
          <div className="avatar">
            <i className="iconfont icon-UserSettings-copy"></i>
          </div>
          <p>
            未登录<i className="iconfont icon-down-fill-xs"></i>
          </p>
          <p>开通VIP</p>
          <p className="toolbar">
            <i className="iconfont icon-pifu"></i>
          </p>
          <p className="toolbar">
            <i className="iconfont icon-xin"></i>
          </p>
          <p className="toolbar">
            <i className="iconfont icon-shezhi"></i>
          </p>
        </div>
        <div className="nets-bar">
          <ul>
            <li>
              <i className="iconfont icon-zuoxiajiao"></i>
            </li>
            <li onClick={() => _operateWindow('minimize')}>
              <i className="iconfont icon-zuixiaohua"></i>
            </li>
            <li onClick={_doggleMax}>
              {!max ? (
                <i className="iconfont icon-zuidahua"></i>
              ) : (
                <i className="iconfont icon-huanyuan"></i>
              )}
            </li>
            <li onClick={() => _operateWindow('close')}>
              <i className="iconfont icon-guanbi"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
