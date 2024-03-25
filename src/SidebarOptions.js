import React from 'react'
import './SidebarOption.css'

const SidebarOptions = ({ active, text, Icon }) => {
  return (
    <div className={`sidebar_options ${active && 'sidebar_options--active'}`}>
        <Icon />
        <h2>{text}</h2>
    </div>
  )
}

export default SidebarOptions