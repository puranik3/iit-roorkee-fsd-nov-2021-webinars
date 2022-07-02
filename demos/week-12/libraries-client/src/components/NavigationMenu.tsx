import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';

import './NavigationMenu.css';

const NavigationMenu = () => {
    return (
        <Navbar bg="light" variant="light" expand="lg">
            <Container>
                <Navbar.Brand to="/" as={NavLink} exact>
                    <FontAwesomeIcon icon={faBook} className="me-2" />
                    Home
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="menu-items" />
                <Navbar.Collapse id="menu-items">
                    <Nav className="me-auto">
                        <Nav.Link to="/libraries" as={NavLink}>Libraries</Nav.Link>
                        <Nav.Link to="/about" as={NavLink}>About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationMenu;
