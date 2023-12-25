import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { IoMdHome } from "react-icons/io";
import { RiMovie2Fill } from "react-icons/ri";
import classNames from 'classnames';
import { mainMenu } from '~/utils/consts';


export default function Menu() {
  return (
    <nav className='mt-0.5 mb-1'>
      {mainMenu.map((menu,index)=>(
        <NavLink to={menu.path} key={index}  >
        {({isActive})=>(
          <div className={classNames('flex items-center justify-center hover:bg-[#eff3f41a] py-3 mx-4   text-xl rounded-full transition-colors  gap-x-2 ',{
            "font-bold  ":isActive
          })}>
            {menu.icon} <h4>{menu.title} </h4>
          </div>
        )}
      </NavLink>
      ))}
      

    </nav>
  )
}
