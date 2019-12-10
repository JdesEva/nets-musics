import React, { useState, useRef } from 'react'
import { useMount } from 'react-use'
import { Slider } from 'antd'
import { __Throttle, __Time } from '../utils/utils'
import http from '../api/api'
import server from '../api/server'

interface Voice {
  nowVolumn: number
  oldVolumn: number
}

const Footer: React.FC<any> = props => {
  const [play, setPlay] = useState<boolean>(false) // 播放图标
  const [volumn, setVolumn] = useState<Voice>({
    nowVolumn: 100,
    oldVolumn: 100
  }) // 音量绑定值 - 应当设置初始值为系统音量即可 第一个值永远都是改变的后的值，第二个值是改变之前的值
  const [process, setProcess] = useState<number>(0) // 播放进度
  const [url, setUrl] = useState<string>('') // 歌曲url
  const [Time, setTime] = useState<Array<number>>([0, 0]) // 播放时间
  const audioRef = useRef<any>(null)

  useMount(() => {
    console.log(audioRef)
    console.log(url)
    _getMusic()
  })

  /** 获取音乐 */
  const _getMusic = (id: number = 33894312) => {
    http.get(server.music, { params: { id: id } }).then(res => {
      console.log(res)
      if (res.data.code === 200) {
        console.log(res.data.data[0].url)
        setUrl(res.data.data[0].url)
      }
    })
  }

  /**
   * 节流
   */
  const thFn = __Throttle(() => _listenMusic(), 250)

  /**
   * 监听播放事件
   */
  const _listenMusic = () => {
    // console.log(ev)
    // console.log(ev.timeStamp())
    // console.log(audioRef.current.duration)
    // console.log(audioRef.current.currentTime)
    setTime([audioRef.current.currentTime, audioRef.current.duration])
    let p = (audioRef.current.currentTime / audioRef.current.duration) * 100
    setProcess(p)
    // console.log(audioRef.current.volume)
    // console.log(Time, p)
    // console.log(__Time(audioRef.current.currentTime))
    // console.log(__Time(audioRef.current.duration))
  }

  /**
   * 点击播放按钮的操作
   */
  const _togglePlay = (): void => {
    setPlay(v => {
      if (!v) {
        audioRef.current.play()
      } else {
        audioRef.current.pause()
      }
      return !v
    })
  }

  /**
   * 播放进度
   * @param val {number} 播放进度百分比
   */
  const _onchangeProcess = (val: number): void => {
    setProcess(val)
    console.log(val)
    audioRef.current.currentTime = (val / 100) * Time[1]
  }

  /**
   * 调整音量
   * @param val {number} 音量大小
   */
  const _onchangeVolumn = (val: number): void => {
    setVolumn({ ...volumn, nowVolumn: val })
    audioRef.current.volume = volumn.nowVolumn / 100
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
    let v = volumn.nowVolumn === 0 ? volumn.oldVolumn : 0
    audioRef.current.volume = v / 100
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
        <p>{__Time(Time[0])}</p>
        <Slider
          value={process}
          onChange={(val: any) => _onchangeProcess(val)}
          tooltipVisible={false}
        ></Slider>
        <p>{__Time(Time[1])}</p>
        <audio onTimeUpdate={() => thFn()} src={url} ref={audioRef}></audio>
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
      <div className="nets-bar">
        <ul>
          <li>
            <i className="iconfont icon-xinaixin"></i>
          </li>
          <li>
            <i className="iconfont icon-ci"></i>
          </li>
          <li>
            <i className="iconfont icon-plist"></i>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Footer
