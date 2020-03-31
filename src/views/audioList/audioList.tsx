import React, { useState } from 'react'
import './audioList.scss'
import Card from '../../components/Card'
import Wrapper from '../../components/wrapper'
import { useMount } from 'react-use'
import http from '../../api/api'
import server from '../../api/server'

const AudioList: React.FC<any> = props => {
  const [data, setData] = useState<any[]>([]) // 歌单信息
  const [prviateList, setPrviateList] = useState<any[]>([]) // 独家放送

  useMount(() => {
    _initMusicList()
    _initPrviateList()
    console.log(props)
  })

  /**
   * 请求推荐歌单
   */
  const _initMusicList = () => {
    http.get(server.personalized, { params: { limit: 10 } }).then(res => {
      console.log(res)
      if (res.data.code === 200) setData(res.data.result)
    })
  }

  const _initPrviateList = () => {
    http.get(server.private).then(res => {
      console.log(res)
      if (res.data.code === 200) setPrviateList(res.data.result)
    })
  }

  return (
    <div>
      <Wrapper name="推荐歌单">
        <div className="content">
          {data.map((row, index: number) => {
            return <Card key={index} data={row}></Card>
          })}
        </div>
      </Wrapper>
      <Wrapper name="独家放送">
        <div className="view-content">
          {prviateList.map((row, index: number) => {
            return <Card key={index} data={row}></Card>
          })}
        </div>
      </Wrapper>
      <Wrapper name="最新音乐">
        <div className="content">
          {data.map((row, index: number) => {
            return <Card key={index} data={row}></Card>
          })}
        </div>
      </Wrapper>
    </div>
  )
}

export default AudioList
