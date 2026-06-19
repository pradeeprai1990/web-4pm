import React from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router'

export default function Layout() {
  return (
    <section className='grid grid-cols-[15%_auto] gap-5'>
        <SideBar/>
        <div>
              <Outlet/>
        </div>
      
    </section>
  )
}
