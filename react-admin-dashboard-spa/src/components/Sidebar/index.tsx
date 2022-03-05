import React from 'react'

import { Link, RouteComponentProps } from 'react-router-dom'

import SidebarItem from '../SidebarItem'

import logo from '../../assets/images/logo.png'
import sidebar_items from '../../assets/JsonData/sidebar_routes.json'

import './index.css'

const Sidebar: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {
  const activeItem = sidebar_items.findIndex(item => item.route === props.location.pathname)
  return (
    <div className='sidebar'>
      <div className="sidebar__logo">
        <img src={logo} alt="company logo"></img>
        {
          sidebar_items.map((item, index) => (
            <Link to={item.route} key={index}>
              <SidebarItem
                title={item.display_name}
                icon={item.icon}
                active={index === activeItem} />
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default Sidebar