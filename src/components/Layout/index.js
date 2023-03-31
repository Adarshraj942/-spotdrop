import React from 'react'
import Adminnavbar from '../../pages/Adminnavbar/Adminnavbar'
import Sidebar from '../../pages/Sidebar/Sidebar'

export default function Layout(props) {
    return (
        <>
           <Adminnavbar />
            <Sidebar />
              {props.children}
        </>
    )
}
