import React from 'react'
import './audioList.scss'
import Card from '../../components/Card'

const AudioList: React.FC<any> = props => {
  return (
    <div className="nets-audioList">
      <div className="nets-title">
        <h3>推荐歌单</h3>
        <div>
          <span>更多></span>
        </div>
      </div>
      <div className="content">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  )
}

export default AudioList
