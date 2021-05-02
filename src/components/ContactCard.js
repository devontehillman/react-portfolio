import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import { Card } from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'



function Contact (){
    return(
    <div>
    <Container>
        <Card style={{margin: "30px", padding: "20px", justifyContent: "center",textAlign: "center"}}>
            <h1 style={{textAlign: "center", paddingBottom: "1rem"}}>Contact</h1>
            
            <h2>{<FontAwesomeIcon color="Black" icon="user"/>}Devonte Hillman</h2>
            <h2>{<FontAwesomeIcon color="Black" icon="envelope"/>} hillmand@mail.gvsu.edu</h2>
            <h2>{<FontAwesomeIcon icon={['fa', 'phone-alt']} />}(269)924-9290</h2>
            <h2>Resume:<a class="navbar-brand" href="./assets/Tech Resume.pdf">Click Here</a></h2>
            
            <Row style={{justifyContent:"center"}} >
            <a href="https://github.com/devontehillman?tab=repositories"> 
            <FontAwesomeIcon color="Black" icon={['fab', 'github']} size="3x"/>
            <FontAwesomeIcon color="#0077b5" icon={['fab', 'linkedin']} size="3x"/>
            </a>
            <a href="https://www.linkedin.com/in/devonte-hillman-3a1558158/"> 
                <i class="fab fab-contact fa-linkedin"></i>
            </a>
            </Row>
        </Card>
    </Container>
    </div>
    )
}

export default Contact;