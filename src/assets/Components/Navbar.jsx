import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <div className='shadow h-20'>
            <ul className='flex space-x-7'>
                <li>
                    <NavLink to="/" 
                    className={({isActive}) => isActive ? "text-red-500" : "text-black"}
                    >Home </NavLink>
                </li>
                <li>
                    <NavLink to="/about" 
                    className={({isActive}) => isActive ? "text-red-500" : "text-black"}>about </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" 
                    className={({isActive}) => isActive ? "text-red-500" : "text-black"}>contact </NavLink>
                </li>
                <li>
                    <NavLink to="/params/:id" 
                    className={({isActive}) => isActive ? "text-red-500" : "text-black"}>params </NavLink>
                </li>
            </ul>
        </div>
    </>
  )
}

export default Navbar