import React from 'react'
import Logo from '../../assets/img/LogoMain.png'
import './Menu.css'
import { Link } from 'react-router-dom'
//import Buttonlink from './components/ButtonLink'
import Button from '../Button'

function Menu(){
  return(
    <nav className='Menu'>
      <Link to="/">
        <img clLinkssName='Logo' src={Logo} alt="AnimeFix Logo"/>
      </Link>
      {/* <Buttonlink className='ButtonLink' to="/">
        Novo Vídeo
      </Buttonlink> */}

      <Button as={Link} className='ButtonLink' to="/cadastro/video">
        Novo Vídeo
      </Button>
    </nav>
  )
}

export default Menu