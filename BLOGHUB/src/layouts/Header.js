import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand>
                    <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                        BLOGHUB
                    </Link></Navbar.Brand>
                <Navbar.Brand>
                    <Link to="/addingblog/" style={{ textDecoration: "none", color: "white" }}>
                        New Post
                    </Link>
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Header