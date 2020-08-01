import React from 'react'
import Menu from '../../components/Menu'
import Fotter from '../../components/Footer'
import styled from 'styled-components'

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding-top: 50px;
  padding-left: 5%;
  padding-right: 5%;
`

function PageDefault(props){
  return(
    <>
      <Menu/>
        <Main>
          {props.children}
        </Main>
      <Fotter/>
    </>
  )
} 

export default PageDefault