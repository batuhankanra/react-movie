import React from 'react'
import Logo from './logo'
import Menu from './menu'

export default function SideBar() {
  return (
    <aside className='w-[275px] min-h-screen '>
        <Logo />
        <Menu />
    </aside>
  )
}
