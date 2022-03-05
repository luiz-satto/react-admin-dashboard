import React from 'react'

import './index.css'

interface IProps {
    active: any;
    icon: string | undefined;
    title: string | undefined;
}

const SidebarItem: React.FC<IProps> =
    (props: IProps) => {
        const active = props.active ? 'active' : '';

        return (
            <div className='sidebar__item'>
                <div className={`sidebar__item-inner ${active}`}>
                    <i className={props.icon}></i>
                    <span>
                        {props.title}
                    </span>
                </div>
            </div>
        )
    }

export default SidebarItem
