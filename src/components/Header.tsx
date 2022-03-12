import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react'
import styled from 'styled-components'

function Header() {
  const [burgerstatus, setBurgerStatus] = useState(true)
  return (
    <Container>
       <a href='/'>
            <img src='/images/logo.svg' alt=''/>
      </a>
      <Menu>
        <p><a href='/'>Model S</a></p>
        <p><a href='/'>Model 3</a></p>
        <p><a href='/'>Model X</a></p>
        <p><a href='/'>Model Y</a></p>
      </Menu>
      
      <RightMenu>
         <p><a href='/'>Shop</a></p>
         <p><a href='/'>Tesla Account</a></p>

          {burgerstatus ? 
          (<CustomMenu onClick={() => setBurgerStatus(false)}/> ) 
          : 
          (
          <CustomCloseIcon onClick={() => setBurgerStatus(true)}/>
          )}
      </RightMenu>

      <BurgerNav show={burgerstatus}>
        <li><a href='/'>Model S</a></li>
        <li><a href='/'>Model 3</a></li>
        <li><a href='/'>Model X</a></li>
        <li><a href='/'>Model Y</a></li>
        <li><a href='/'>Existing Inventory</a></li>
        <li><a href='/'>Used Inventory</a></li>
        <li><a href='/'>Cyber-Truck Inventory</a></li>
        <li><a href='/'>Roadster Inventory</a></li>
        <li><a href='/'>Semi Inventory</a></li>
        <li><a href='/'>Charging-In Inventory</a></li>
        <li><a href='/'>Utilities Inventory</a></li>
      </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  `
const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  @media (max-width: 970px) {
        display: none;
    }
    p {
      font-weight: 600;
      text-transform: uppercase;
      padding: 0 20px;
      flex-wrap: nowrap;
    }
  `
  const RightMenu = styled.div`
  display: flex;
  align-items: center;
  cursor:pointer;
  p {
      font-weight: 600;
      text-transform: uppercase;
      padding: 0 20px;
      flex-wrap: nowrap;
    }
  `
const CustomMenu = styled(MenuIcon)`

`
const BurgerNav = styled.div<{show: boolean}>`
    position: fixed;
    top: 0;
    bottom: 0;
    right: -85px;
    background-color: white;
    width: 397px;
    list-style: none;
    padding: 20px;
    opacity: 0.90;
    margin-top: 60px;
    border-radius: 20px;
    transform: ${props => props.show ? 'translateX(100%)' : 'translateX(0)'};
    transition: transform 0.2s ease-in;

    li {
      margin: 10px;
      padding: 10px;
      border-bottom: 1px solid rgba(0,0,0,0.2);
      cursor: pointer;
      font-weight: 600;
    }
`
const CustomCloseIcon = styled(CloseIcon)`
    cursor: pointer;
`