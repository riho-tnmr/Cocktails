import React, { useEffect, useRef, useState, useCallback } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../logo.svg'

const Navbar = () => {
  const header = useRef();
  const lastPosition = useRef(0);
  const headerHeight = 80;
  const [isFixed, setIsFixed] = useState(false);
  const [isShow, setIsShow] = useState(false);

  const scrollEvent = useCallback(() => {
    const currentPosition = window.pageYOffset;

    if(currentPosition > headerHeight){
      setIsFixed(true);
    }
    if(lastPosition.current > currentPosition){
      setIsShow(true);
    }else{
      setIsShow(false);
    }
    lastPosition.current = currentPosition;
  },[lastPosition])
  

  useEffect(() => {
    window.addEventListener('scroll', scrollEvent);
  }, [scrollEvent])

  return (
    <nav className={(() => {
      if(isShow){
        if(isFixed){
          return 'navbar show fixed'
        }
        return 'navbar show'
      }else{
        if(isFixed){
          return 'navbar fixed'
        }
        return 'navbar'
      }
    })()}
         ref={header}>
      <div className="nav-center">
        <a href="/"><img src={logo} alt="The Cocktail DB" /></a>
        <ul className="nav-links">
          <li><NavLink to='/'>HOME</NavLink></li>
          <li><NavLink to='/about'>ABOUT</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
