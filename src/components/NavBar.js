import React from 'react'
import { Navbar, Container, Nav } from "react-bootstrap"
import styles from "../styles/NavBar.module.css"

const NavBar = () => {
  return (
    <Navbar className={styles.NavBar} expand="lg" fixed="top">
      <Container>
        <Navbar.Brand className={styles.Title}>The Hearth of the Dungeon</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <Nav.Link>
              <i className="fas fa-house-user"></i>Home
            </Nav.Link>
            <Nav.Link>
              <i className="fas fa-sign-in-alt"></i>Sign in
            </Nav.Link>
            <Nav.Link>
              <i className="fas fa-user-plus"></i>Sign up
            </Nav.Link>
          </Nav>    
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar