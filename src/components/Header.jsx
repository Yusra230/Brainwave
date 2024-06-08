import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from "react";
import GradientButton from "./Design/GradientButton";
import { Link as ScrollLink } from "react-scroll";

function Header() {
    // const [activeClass, setActiveClass] = useState('home');
    const [showOffcanvas, setShowOffcanvas] = useState(false); // Add state to control offcanvas visibility

    const handleCloseOffcanvas = () => setShowOffcanvas(false);

    return (
        <div className="header">
            <Navbar expand="lg">
                <Container fluid>
                    <Navbar.Brand as={ScrollLink} to="home" smooth={true} duration={100} className="d-flex align-items-center text-white mx-3">
                        <img
                            alt=""
                            src="brainwave-symbol.svg"
                            width="50"
                            height="50"
                            className="d-inline-block"
                        />{' '}
                        <span className="logo-text px-2">Brainwave</span>
                    </Navbar.Brand>

                    <Navbar.Toggle  aria-controls="offcanvasNavbar" onClick={() => setShowOffcanvas(true)} />
                    <Navbar.Offcanvas
                        show={showOffcanvas}
                        onHide={handleCloseOffcanvas}
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            {/* <Offcanvas.Title id="offcanvasNavbarLabel"> <img src="brainwave-symbol.svg" alt="Brainwave" width="90" height="24" />  </Offcanvas.Title> */}
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-center align-items-center flex-grow-1 pe-3">
                                <Nav.Link as={ScrollLink} to="features" smooth="true" duration={100} onClick={() => { handleCloseOffcanvas(); }} className={`fw navLinkPadding`} >FEATURES</Nav.Link>
                                <Nav.Link  as={ScrollLink} to="pricing" smooth="true" duration={100} onClick={() => {  handleCloseOffcanvas(); }} className={`fw navLinkPadding`} >PRICING</Nav.Link>
                                <Nav.Link  as={ScrollLink} to="howToUse" smooth="true" duration={100} onClick={() => {  handleCloseOffcanvas(); }} className="fw navLinkPadding">HOW TO USE</Nav.Link>
                                <Nav.Link  as={ScrollLink} to="roadMap" smooth="true" duration={100} onClick={() => {  handleCloseOffcanvas(); }} className="fw navLinkPadding">ROADMAP</Nav.Link>
                            </Nav>
                            <Nav className="align-items-center">
                                <Nav.Link href="#deets" className="fw navLinkPadding">NEW ACCOUNT</Nav.Link>
                                <GradientButton name='SIGN IN'></GradientButton>
                            </Nav>

                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container >
            </Navbar >
            <hr className="mt-0" />
        </div >
    );
}

export default Header;