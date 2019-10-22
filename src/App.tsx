import './App.scss'
import React from 'react'
import Header from './layouts/header'
import Main from './layouts/main'
import Footer from './layouts/footer'

const App: React.FC<any> = (props: any) => {
  console.log(import(/* webpackChunkName: "Index" */ './views/index/index'))
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  )
}

export default App
