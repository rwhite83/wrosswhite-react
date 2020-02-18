import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from 'react-bootstrap/Navbar'
// import Nav from 'react-bootstrap/Nav'
// import NavDropdown from 'react-bootstrap/NavDropdown'


class Navigation extends React.Component {
    render() {
        return (
            <Navbar className="sticky-top navbar navbar-expand-lg navbar-dark bg-primary" id="sideNav" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">W. Ross White</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <a className="navbar-brand js-scroll-trigger" href="#about" id="nav-image">
                    <span className="d-none d-lg-block">
                        <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="img/profile.jpg" alt=""></img>
                    </span>
                </a>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link js-scroll-trigger" href="#page-top">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link js-scroll-trigger" href="#experience">Experience</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link js-scroll-trigger" href="#education">Education</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link js-scroll-trigger" href="#skills">Skills</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link js-scroll-trigger" href="#interests">Interests</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link js-scroll-trigger" href="#awards">Awards</a>
                            </li>
                        </ul>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navigation