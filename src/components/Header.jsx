import React from 'react'
import { Button, Container, Nav, Navbar, NavbarBrand, NavLink } from 'react-bootstrap'
import {AiFillMail, AiFillNotification} from 'react-icons/ai'

const Header = () => {
  return (
    <Navbar className='p-0' variant='light' bg='light'>
        <Container className='py-0 my-0'>
            <NavbarBrand>
                CRYSHARE
            </NavbarBrand>
            
            <Nav className='mr-auto'>
                <NavLink className=''>
                    <AiFillMail size={24}/>
                </NavLink>
                <NavLink className=''>
                    <AiFillNotification size={24}/>
                </NavLink>
                <div className="vr"></div>
            <NavLink>
            <Button variant='outline-primary' size='sm' >Buy XAI</Button>
            </NavLink>
            </Nav>
            
        </Container>
    </Navbar>
  )
}

export default Header;