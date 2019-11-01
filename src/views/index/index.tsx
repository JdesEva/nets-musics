import React from 'react'
import Nav from '../nav/nav'
import Banner from '../banner/banner'
import './index.scss'

const Index: React.FC<any> = props => {
  return (
    <div className="nets-index">
      <Nav></Nav>
      <Banner></Banner>
    </div>
  )
}

export default Index
