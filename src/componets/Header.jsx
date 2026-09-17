import React from 'react'
import logo from '../assets/logo.png'
import { Link } from "react-router"

const Header = () => {
  return (
    <div className='header'>
      <Link to="/" className="logo">
        <img src={logo} alt="LogoWishList" />
      </Link>
      <div className='nav'>
        <Link to="/biblioteca">Minha biblioteca</Link>
        <Link to="/avaliacoes">Avaliações</Link>
      </div>
    </div>
  )
}

export default Header
