import React from 'react'

function Buttonlink(props){
  return(
   <a className={props.className} href={props.href}>
     {props.children}
   </a>
  )
}

export default Buttonlink