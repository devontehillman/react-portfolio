import React from 'react';
import Container from 'react-bootstrap/Container';
import { Card } from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'



function Contact (){
    return(
    <div>
    <Container>
        <Card style={{margin: "30px", padding: "20px", textAlign:"center"}}>
            <h1>Contact</h1>
            <h2>{<FontAwesomeIcon icon="user"/>}Devonte Hillman</h2>
            <h2>{<FontAwesomeIcon icon="envelope"/>} hillmand@mail.gvsu.edu</h2>
            <h2>{<FontAwesomeIcon icon={['fa', 'phone-alt']} />}(269)924-9290</h2>
            <div>
            <div>
            <a href="https://github.com/devontehillman?tab=repositories"> 
            <FontAwesomeIcon icon={['fab', 'github']} size="3x"/>
            <FontAwesomeIcon icon={['fab', 'linkedin']} size="3x"/>
            </a>
            <a href="https://www.linkedin.com/in/devonte-hillman-3a1558158/"> 
                <i class="fab fab-contact fa-linkedin"></i>
            </a>
            </div>
            <h2>Resume:<a class="navbar-brand" href="assets/Tech Resume.pdf">Click Here</a></h2>
            </div>
        </Card>
    </Container>
    </div>
    )
}

export default Contact;