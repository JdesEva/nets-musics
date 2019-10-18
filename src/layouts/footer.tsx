import React, { useState } from 'react'
import { Slider } from 'antd'

const Footer: React.FC<any> = props => {
  const [play, setPlay] = useState<boolean>(false)
  const [voice, setVoice] = useState<boolean>(false)

  /**
   * 点击播放按钮的操作
   */
  const _togglePlay = (): void => {
    setPlay(!play)
  }

  /**
   * 静音
   */
  const _toggleVoice = (): void => {
    setVoice(!voice)
  }

  return (
    <div className="nets-footer">
      <div className="nets-player">
        <p>
          <i className="iconfont icon-up-play"></i>
        </p>
        <p onClick={_togglePlay}>
          {!play ? (
            <i className="iconfont icon-bofang"></i>
          ) : (
            <i className="iconfont icon-zantingtingzhi"></i>
          )}
        </p>
        <p>
          <i className="iconfont icon-xiayishou"></i>
        </p>
      </div>
      <div className="nets-process">
        <Slider tooltipVisible={false}></Slider>
      </div>
      <div className="nets-voice">
        <div onClick={_toggleVoice}>
          {voice ? (
            <i className="iconfont icon-jingyin"></i>
          ) : (
            <i className="iconfont icon-shengyin"></i>
          )}
        </div>
        <Slider tooltipVisible={false}></Slider>
      </div>
      <div className="nets-bar">1</div>
    </div>
  )
}
export default Footer
