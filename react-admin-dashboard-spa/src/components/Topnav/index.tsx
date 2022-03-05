import React from 'react'

import Dropdown from '../Dropdown'

import './index.css'

const Topnav: React.FC = () => {
    return (
        <div className='topnav'>
            <div className="topnav__search">
                <input type="text" placeholder='Search here...' />
                <i className='bx bx-search'></i>
                <div className="topnav__right">
                    <div className="topnav__right-item">
                        {/* here */}
                        <Dropdown />
                    </div>
                    <div className="topnav__right-item">
                        {/* here */}
                        <Dropdown />
                    </div>
                    <div className="topnav__right-item">
                        {/* theme settings here */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topnav
