import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';


class Navigation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        };
        this.toggleExpanded = this.toggleExpanded.bind(this);
        this.collapseNav = this.collapseNav.bind(this);
    }

    toggleExpanded() {
            this.state.expanded ? 
                this.setState({ expanded: false }) :
                this.setState({ expanded: true })
    }

    collapseNav() {
        this.setState({ expanded: false })
    }

    render() {
        return (
            <Navbar expanded={this.state.expanded} className="sticky-top navbar navbar-expand-lg navbar-dark bg-primary" id="sideNav" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#page-top" onClick={this.collapseNav}>W. Ross White</Navbar.Brand>
                <Navbar.Toggle onClick={() => this.toggleExpanded() } aria-controls="responsive-navbar-nav" />
                <a className="navbar-brand js-scroll-trigger" href="#about" id="nav-image">
                    <span className="d-none d-lg-block">
                        <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="img/profile.jpg" alt=""></img>
                    </span>
                </a>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav expanded="false" className="mr-auto">
                        <ul className="navbar-nav">
                            <li class="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#page-top" onClick={this.toggleExpanded}>About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#experience" onClick={this.toggleExpanded}>Experience</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#education" onClick={this.toggleExpanded}>Education</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#skills" onClick={this.toggleExpanded}>Skills</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#interests" onClick={this.toggleExpanded}>Interests</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#awards" onClick={this.toggleExpanded}>Awards</a>
                            </li>
                        </ul>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navigation