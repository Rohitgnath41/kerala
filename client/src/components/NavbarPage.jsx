// import React from "react";
// import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import { useState } from "react";
// import Modal from "react-bootstrap/Modal";
// import Register from "./Register";
// import Login from "./Login";

// function NavbarPage() {
//   const [show, setShow] = useState(false);

//   const [isRegister,setIsRegister] = useState(false)

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   let modalFun=()=>{
//     setIsRegister(!isRegister)
//   }


//   return (
//     <>
//       <Navbar expand="lg" className="bg-primary" >
//         <Container fluid>
//           <Navbar.Brand href="#" className="text-white fw-bold fs-2">
//             Kerala Tourism
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="navbarScroll" />
//           <Navbar.Collapse id="navbarScroll">
//             <Nav
//               className="me-auto my-2 my-lg-0"
//               style={{ maxHeight: "100px" }}
//               navbarScroll
//             >
//               <Nav.Link href="/" className="text-light">
//                 Home
//               </Nav.Link>
//               <Nav.Link onClick={handleShow} className="text-light">
//                 Login
//               </Nav.Link>
//               <NavDropdown title="Deals" id="navbarScrollingDropdown">
//                 <NavDropdown.Item href="#action3">Offers</NavDropdown.Item>
//                 <NavDropdown.Item href="#action4">
//                   Package Details
//                 </NavDropdown.Item>
//                 <NavDropdown.Divider />
//                 <NavDropdown.Item href="#action5">Guides</NavDropdown.Item>
//               </NavDropdown>
//               <Nav.Link href="/AboutPage" className="text-white">
//                 About Us
//               </Nav.Link>
//             </Nav>
//             <Form className="d-flex">
//               <Form.Control
//                 type="search"
//                 placeholder="Search"
//                 className="me-2"
//                 aria-label="Search"
//               />
//               <Button variant="light">Search</Button>
//             </Form>
//           </Navbar.Collapse>
//         </Container>

//         {/* ModalBox */}
//         <Modal show={show} onHide={handleClose}>
//           <Modal.Header closeButton>
//             <Modal.Title>{isRegister ? "Register" : "Login"}</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             {
//               isRegister ? <Register toggleLogin={modalFun}/> : <Login toggleRegister={modalFun}/>
//             }
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="primary" onClick={handleClose}>
//               Close
//             </Button>
//             <Button variant="primary" onClick={handleClose}>
//               Save Changes
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       </Navbar>
//     </>
//   );
// }

// export default NavbarPage;
// import React, { useState } from "react";
// import { Button, Container, Form, Nav, Navbar, NavDropdown, Modal } from "react-bootstrap";
// import { FaHome, FaUserCircle, FaSearch } from "react-icons/fa"; // Importing icons
// import Register from "./Register";
// import Login from "./Login";
// import './NavbarPage.css'; // Import custom styles

// function NavbarPage() {
//   const [show, setShow] = useState(false);
//   const [isRegister, setIsRegister] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   const toggleModal = () => setIsRegister((prev) => !prev);

//   return (
//     <>
//       <Navbar expand="lg" className="bg-primary custom-navbar">
//         <Container fluid>
//           <Navbar.Brand href="#" className="text-white fw-bold fs-2">
//             <img src="path_to_your_logo.png" alt="Logo" className="logo" /> {/* Add your logo */}
//             Kerala Tourism
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="navbarScroll" />
//           <Navbar.Collapse id="navbarScroll">
//             <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
//               <Nav.Link href="/" className="text-light">
//                 <FaHome /> Home
//               </Nav.Link>
//               <Nav.Link onClick={handleShow} className="text-light">
//                 <FaUserCircle /> Login
//               </Nav.Link>
//               <NavDropdown title="Deals" id="navbarScrollingDropdown" className="text-light">
//                 <NavDropdown.Item href="#action3">Offers</NavDropdown.Item>
//                 <NavDropdown.Item href="#action4">Package Details</NavDropdown.Item>
//                 <NavDropdown.Divider />
//                 <NavDropdown.Item href="#action5">Guides</NavDropdown.Item>
//               </NavDropdown>
//               <Nav.Link href="/AboutPage" className="text-white">About Us</Nav.Link>
//             </Nav>
//             <Form className="d-flex" aria-label="Search Form">
//               <Form.Control
//                 type="search"
//                 placeholder="Search"
//                 className="me-2 search-input" // Add custom class for styling
//                 aria-label="Search"
//               />
//               <Button variant="light" type="submit" className="search-button">
//                 <FaSearch /> {/* Search icon */}
//               </Button>
//             </Form>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>

//       {/* Modal Box */}
//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>{isRegister ? "Register" : "Login"}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {isRegister ? <Register toggleLogin={toggleModal} /> : <Login toggleRegister={toggleModal} />}
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>Close</Button>
//           <Button variant="primary" onClick={handleClose}>Save Changes</Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default NavbarPage;
// import React, { useState } from "react";
// import { Button, Container, Form, Nav, Navbar, NavDropdown, Modal } from "react-bootstrap";
// import { FaHome, FaUserCircle, FaSearch } from "react-icons/fa"; // Importing icons
// import Register from "./Register";
// import Login from "./Login";
// import './NavbarPage.css'; // Import custom styles

// function NavbarPage() {
//   const [show, setShow] = useState(false);
//   const [isRegister, setIsRegister] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   const toggleModal = () => setIsRegister((prev) => !prev);

//   return (
//     <>
//       <Navbar expand="lg" className="bg-success custom-navbar"> {/* Changed bg-primary to bg-success */}
//         <Container fluid>
//           <Navbar.Brand href="#" className="text-white fw-bold fs-2">
//             <img src="path_to_your_logo.png" alt="Logo" className="logo" /> {/* Add your logo */}
//             Kerala Tourism
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="navbarScroll" />
//           <Navbar.Collapse id="navbarScroll">
//             <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
//               <Nav.Link href="/" className="text-light">
//                 <FaHome /> Home
//               </Nav.Link>
//               <Nav.Link onClick={handleShow} className="text-light">
//                 <FaUserCircle /> Login
//               </Nav.Link>
//               <NavDropdown title="Deals" id="navbarScrollingDropdown" className="text-light">
//                 <NavDropdown.Item href="#action3">Offers</NavDropdown.Item>
//                 <NavDropdown.Item href="#action4">Package Details</NavDropdown.Item>
//                 <NavDropdown.Divider />
//                 <NavDropdown.Item href="#action5">Guides</NavDropdown.Item>
//               </NavDropdown>
//               <Nav.Link href="/AboutPage" className="text-white">About Us</Nav.Link>
//             </Nav>
//             <Form className="d-flex" aria-label="Search Form">
//               {/* <Form.Control
//                 type="search"
//                 placeholder="Search"
//                 className="me-2 search-input" // Add custom class for styling
//                 aria-label="Search"
//               /> */}
//               {/* <Button variant="light" type="" className="search-button">
//                 <FaSearch /> {/* Search icon */}
//               {/* </Button> */} 
//             </Form>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>

//       {/* Modal Box */}
//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>{isRegister ? "Register" : "Login"}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {isRegister ? <Register toggleLogin={toggleModal} /> : <Login toggleRegister={toggleModal} />}
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>Close</Button>
//           <Button variant="primary" onClick={handleClose}>Save Changes</Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default NavbarPage;

import React, { useState } from "react";
import { Button, Container, Form, Nav, Navbar, NavDropdown, Modal } from "react-bootstrap";
import { FaHome, FaUserCircle, FaSearch } from "react-icons/fa"; // Importing icons
import Register from "./Register";
import Login from "./Login";
import { useContext } from "react";
import{usestate} from 'react';
import CommentContext from "./ComponentProvider";

function NavbarPage() {
  const [show, setShow] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const toggleModal = () => setIsRegister((prev) => !prev);


  const {setComment} = useContext(CommentContext)
  const [handle,setHandle] = useState("")

  let serachFun=(event)=>{
    setHandle(event.target.value)
  }
  let handleFun =()=>{
    setComment(handle)
  }

  return (
    <>
      <Navbar expand="lg" className="bg-success"> {/* Background color set to green */}
        <Container fluid>
          <Navbar.Brand href="#" className="text-white fw-bold fs-2 d-flex align-items-center">
            <img 
              src="https://logopond.com/logos/53dd4f0315f9a15bc7d900c8cd504322.png"  // Replace with your logo URL
              alt="Logo" 
              height="40" // Set logo height
              className="me-2" // Add margin to separate logo from text
            />
            Kerala Tourism
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
              <Nav.Link href="/" className="text-light">
                <FaHome /> Home
              </Nav.Link>
              <Nav.Link onClick={handleShow} className="text-light">
                <FaUserCircle /> Login
              </Nav.Link>
              <NavDropdown title="Deals" id="navbarScrollingDropdown" className="text-light">
                <NavDropdown.Item href="#action3">Offers</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Package Details</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Guides</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/AboutPage" className="text-white">About Us</Nav.Link>
            </Nav>
            <Form className="d-flex" aria-label="Search Form" onSubmit={(e) => e.preventDefault()}>
              {/* Uncomment and customize search input and button as needed */}
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2" // Add margin to input
                aria-label="Search" onChange={serachFun}
              /> 
          <Button variant="light" type="submit" onClick={handleFun}> 
                {/* <FaSearch /> 
                          search icon */}
                          Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar> 

      {/* Modal Box */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{isRegister ? "Register" : "Login"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {isRegister ? <Register toggleLogin={toggleModal} /> : <Login toggleRegister={toggleModal} />}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" onClick={handleClose}>Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NavbarPage;
