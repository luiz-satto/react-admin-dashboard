import React from 'react'

import Sidebar from '../Sidebar'
import Routes from '../../routes'

import { BrowserRouter, Route } from 'react-router-dom'

const Layout: React.FC = () => {
  return (
    <BrowserRouter>
      <Route render={(props) => (
        <div className='layout'>
          <Sidebar {...props} />
          <div className="layout__content">
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
