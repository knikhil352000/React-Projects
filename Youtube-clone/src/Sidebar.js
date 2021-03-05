import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import './SidebarRow.css'
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <h1>Hello SideBar</h1>
            <SidebarRow icon={} title='Home'/>
            <SidebarRow icon={} title='Trending'/>
            <SidebarRow icon={} title='Subscription'/>
            <SidebarRow icon={} title=''/>
            <SidebarRow icon={} title=''/>
            <SidebarRow icon={} title=''/>
            <SidebarRow icon={} title=''/>
            <SidebarRow icon={} title=''/>
            <SidebarRow icon={} title=''/>
        </div>
    )
}

export default Sidebar
