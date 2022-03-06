import React from 'react'
import { Link } from 'react-router-dom'

import Dropdown from '../Dropdown'
import NotificationItem from '../NotificationItem'
import UserMenu from '../UserMenu'
// import ThemeMenu from '../thememenu/ThemeMenu'

import userImage from '../../assets/images/user.png'
import notifications from '../../assets/JsonData/notification.json'
import user_menu from '../../assets/JsonData/user_menus.json'

import './index.css'
import IDropDownContent from '../Dropdown/IDropDownContent'

const user = {
    displayName: 'Luiz Satto',
    image: userImage
}

const renderUserToggle = (displayName: string, image: string) => (
    <div className="topnav__right-user">
        <div className="topnav__right-user__image">
            <img src={image} alt="" />
        </div>
        <div className="topnav__right-user__name">
            {displayName}
        </div>
    </div>
)

const Topnav: React.FC = () => {
    return (
        <div className='topnav'>
            <div className="topnav__search">
                <input type="text" placeholder='Search here...' />
                <i className='bx bx-search'></i>
            </div>
            <div className="topnav__right">
                <div className="topnav__right-item">
                    <Dropdown
                        customToggle={() => renderUserToggle(user.displayName, user.image)}
                        contentData={user_menu}
                        renderItems={(item: IDropDownContent, index: number) =>
                            <UserMenu item={item} index={index} />
                        }
                    />
                </div>
                <div className="topnav__right-item">
                    <Dropdown
                        icon='bx bx-bell'
                        badge='12'
                        contentData={notifications}
                        renderFooter={() => <Link to='/'>View All</Link>}
                        renderItems={(item: IDropDownContent, index: number) =>
                            <NotificationItem item={item} index={index} />
                        }
                    />
                </div>
                <div className="topnav__right-item">
                    {/* <ThemeMenu /> */}
                </div>
            </div>
        </div>
    )
}

export default Topnav