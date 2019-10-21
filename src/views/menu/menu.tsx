import React, { useState } from 'react'
import menuList from '../../asserts/static/menu.json'
import './menu.scss'

interface MenuList {
  title: string
  children: {
    name: string
    icon: string
    router: string
  }[]
}

const Menu: React.FC<any> = props => {
  console.log(menuList)
  const [active, setActive] = useState<string>('0-0')

  const _handleClick = (id: string): void => {
    setActive(id)
  }

  return (
    <div className="nets-menu">
      {menuList.map((row: MenuList, index) => {
        return (
          <div key={index}>
            <span className="nets-menu-title">{row.title}</span>
            <div className="nets-menu-wrapper">
              {row.children.map((item, idx) => {
                return (
                  <div
                    key={idx}
                    data-id={`${index}-${idx}`}
                    className={
                      active === `${index}-${idx}`
                        ? 'active nets-menu-list'
                        : 'nets-menu-list'
                    }
                    onClick={() => _handleClick(`${index}-${idx}`)}
                  >
                    <span>{item.name}</span>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Menu
