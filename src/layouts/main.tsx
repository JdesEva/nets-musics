import React from 'react'
import Aside from './aside'
import { HashRouter, Route, Switch } from 'react-router-dom'
import routes from '../router'

const Main: React.FC<any> = props => {
  return (
    <div className="nets-main">
      <Aside></Aside>
      <div className="nets-view">
        <HashRouter>
          <Switch>
            {routes.map(row => {
              return (
                <Route
                  key={row.path}
                  path={row.path}
                  component={row.component}
                ></Route>
              )
            })}
            {/* <Redirect from="/" to="/index"></Redirect> */}
          </Switch>
        </HashRouter>
      </div>
    </div>
  )
}

export default Main
