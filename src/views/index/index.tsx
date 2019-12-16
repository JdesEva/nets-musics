import React, { useState } from 'react'
import Nav from '../nav/nav'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import routes from '../../router'
import './index.scss'
import BScroll from 'better-scroll'
import { useMount, useUnmount, useUpdateEffect } from 'react-use'

const Index: React.FC<any> = props => {
  const [scroll, setScroll] = useState<any>(null)

  useMount(() => {
    _initBscroll()
  })

  useUnmount(() => {
    console.log('end', scroll)
    scroll.destroy()
    setScroll(null)
  })

  useUpdateEffect(() => {
    scroll.refresh()
    console.log('upodate')
    return () => {
      console.log('78edn')
      scroll.destroy()
    }
  })

  const _initBscroll = () => {
    let BS = new BScroll('.nets-index', {
      scrollY: true,
      click: true,
      scrollbar: true,
      mouseWheel: true
    })
    setScroll(BS)
    console.log(BS)
  }

  return (
    <div className="nets-index">
      <div>
        <HashRouter>
          <Nav></Nav>
          <Switch>
            {routes.map(row => {
              return (
                <Route
                  key={row.path}
                  path={row.path}
                  component={row.component}
                  {...props}
                ></Route>
              )
            })}
            <Redirect from="/" to="/index"></Redirect>
          </Switch>
        </HashRouter>
      </div>
    </div>
  )
}

export default Index
