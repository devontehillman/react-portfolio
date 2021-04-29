import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


function NavBar() {
    return(
        <div>
        <Nav class="navbar navbar-expand-lg navbar-dark bg-dark" >
        <a class="navbar-brand" href="index.html">Devonte Hillman</a>
        <FontAwesomeIcon icon={['fab', 'github']} size="3x" />
        <FontAwesomeIcon icon={['fab', 'linkedin']} size="3x" />

        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#home">Contact Me</Nav.Link>
        {/* <Button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </Button> */}
        </Nav>
        </div>
    )
};

export default NavBar;

{/* <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="index.html">Devonte Hillman</a>
      <!-- Social links + font awesome -->
      <a href="https://github.com/devontehillman?tab=repositories">
        <i class="fab fa-github"></i>
      </a>
      <a href="https://www.linkedin.com/in/devonte-hillman-3a1558158/">
        <i class="fab fa-linkedin"></i>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        class="collapse navbar-collapse"
        id="navbarSupportedContent"
      >
        <ul class="nav navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="index.html"
              >Home <span class="sr-only">(current)</span></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="contact.html">Contact Me</a>
          </li>
        </ul>
      </div>
    </nav> */}