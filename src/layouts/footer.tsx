import React, { useState } from 'react'
import { Slider } from 'antd'

interface Voice {
  nowVolumn: number
  oldVolumn: number
}

const Footer: React.FC<any> = props => {
  const [play, setPlay] = useState<boolean>(false) // 播放图标
  const [volumn, setVolumn] = useState<Voice>({ nowVolumn: 0, oldVolumn: 48 }) // 音量绑定值 - 应当设置初始值为系统音量即可 第一个值永远都是改变的后的值，第二个值是改变之前的值
  const [process, setProcess] = useState<number>(0) // 播放进度

  /**
   * 点击播放按钮的操作
   */
  const _togglePlay = (): void => {
    setPlay(!play)
  }

  /**
   * 播放进度
   * @param val {number} 播放进度百分比
   */
  const _onchangeProcess = (val: number): void => {
    setProcess(val)
  }

  /**
   * 调整音量
   * @param val {number} 音量大小
   */
  const _onchangeVolumn = (val: number): void => {
    setVolumn({ ...volumn, nowVolumn: val })
  }

  /**
   * 调整音量，保证静音之后的正确
   * @param val {number} 音量大小
   */
  const _onchangeVolumnSync = (val: number): void => {
    if (val !== 0) setVolumn({ ...volumn, oldVolumn: val })
  }

  /**
   * 静音按钮操作
   */
  const _toggleNoVoice = (): void => {
    setVolumn({
      ...volumn,
      nowVolumn: volumn.nowVolumn === 0 ? volumn.oldVolumn : 0
    })
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
        <Slider
          value={process}
          onChange={(val: any) => _onchangeProcess(val)}
          tooltipVisible={false}
        ></Slider>
      </div>
      <div className="nets-voice">
        <div onClick={_toggleNoVoice}>
          {volumn.nowVolumn === 0 ? (
            <i className="iconfont icon-jingyin"></i>
          ) : (
            <i className="iconfont icon-shengyin"></i>
          )}
        </div>
        <Slider
          value={volumn.nowVolumn}
          onChange={(val: any) => _onchangeVolumn(val)}
          onAfterChange={(val: any) => _onchangeVolumnSync(val)}
          tooltipVisible={false}
        ></Slider>
      </div>
      <div className="nets-bar">1</div>
    </div>
  )
}
export default Footer
