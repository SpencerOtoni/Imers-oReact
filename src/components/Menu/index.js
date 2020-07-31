import React from 'react'
import Logo from '../../assets/img/Logo.png'
import './Menu.css'
//import Buttonlink from './components/ButtonLink'
import Button from '../Button'

function Menu(){
  return(
    <nav className='Menu'>
      <a href="/">
        <img className='Logo' src={Logo} alt="AnimeFix Logo"/>
      </a>
      {/* <Buttonlink className='ButtonLink' href="/">
        Novo Vídeo
      </Buttonlink> */}

      <Button className='ButtonLink' href="/">
        Novo Vídeo
      </Button>
    </nav>
  )
}

export default Menu