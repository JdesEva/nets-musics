import React from 'react'
import Banner from '../banner/banner'
import AudioList from '../audioList/audioList'

const Main: React.FC<any> = props => {
  return (
    <div>
      <Banner></Banner>
      <AudioList></AudioList>
    </div>
  )
}

export default Main
