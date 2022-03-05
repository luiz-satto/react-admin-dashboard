import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Sidebar from '../Sidebar'
import Topnav from '../Topnav'
import Routes from '../../routes'

import './index.css'

const Layout: React.FC = () => {
  return (
    <BrowserRouter>
      <Route render={(props) => (
        <div className='layout'>
          <Sidebar {...props} />
          <div className="layout__content">
            <Topnav />
            <div className="layout__content-main">
              <Routes />
            </div>
          </div>
        </div>
      )}></Route>
    </BrowserRouter>
  )
}

export default Layout
