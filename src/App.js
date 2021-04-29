import React from 'react';
import "./components/FontAwesomeIcons";
// import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import NavBar from './components/NavBar'
import JumboCard from './components/JumboCard'
//import EmployeeCardDeck from './compontents/EmployeeCardDeck'
//import API from "./utils/API"
import Contact from "./components/Contact";

function App (){
    return(
    <div>
        {/* <NavBar/>
        <Container>
        <JumboCard>
        </JumboCard>
        </Container> */}
        <Contact></Contact>
        {/* <API/> */}
    </div>
    )
}

export default App;