import React from 'react'
import './nav.scss'
import navList from '../../asserts/static/nav.json'
import { NavLink } from 'react-router-dom'

const Nav: React.FC<any> = props => {
  return (
    <div className="nets-nav">
      {navList.map((row, index) => {
        return (
          <NavLink exact activeClassName="active" key={index} to={row.path}>
            {row.name}
          </NavLink>
        )
      })}
    </div>
  )
}

export default Nav
