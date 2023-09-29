import React from 'react'
import style from "./home.module.css"
import {Link} from 'react-router-dom'


const HomePage = () => {
  return (
    <div id={style.nav}>
        <Link to='./'>CREATE-USERS</Link>
        <Link to='./user'>USERS</Link>
    </div>
  )
}

export default HomePage