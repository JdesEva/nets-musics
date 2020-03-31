import React, { useRef } from 'react'
import Nav from '../nav/nav'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import routes from '../../router'
import './index.scss'
import BScroll from 'better-scroll'
import { useMount, useUnmount, useUpdateEffect } from 'react-use'

const Index: React.FC<any> = props => {
  const scroll = useRef<any>()

  useMount(() => {
    _initBscroll()
  })

  useUnmount(() => {
    console.log('end', scroll)
    scroll.current.destroy()
  })

  useUpdateEffect(() => {
    scroll.current.refresh()
    console.log('updateScroll')
  })

  /**
   * 初始化滚动条
   */
  const _initBscroll = () => {
    scroll.current = new BScroll('.nets-index', {
      scrollY: true,
      click: true,
      scrollbar: true,
      mouseWheel: true
    })
  }

  return (
    <div className="nets-index">
      <div>
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
      </div>
    </div>
  )
}

export default withRouter(Index)
