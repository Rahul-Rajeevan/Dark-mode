import React from 'react'
import { Theme } from '../context/Theme'
import { useContext } from 'react'

const Navbar = () => {
   const {cover,theme1,isLight} = useContext(Theme) 
  return (
    <div>
        <button onClick={cover}>{isLight?"lightmode":"darkmode"}</button>
    </div>
  )
}

export default Navbar