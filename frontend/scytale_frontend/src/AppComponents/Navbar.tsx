import { Container,Navbar,Nav } from "react-bootstrap";
import logo from '../logo.png';



export default function AppNavbar(props:any){


    return(
        <Navbar variant="dark">
    <Container>
    
    <Nav className="me-auto">
  <Navbar.Brand href="/">
      <img width='100px' height="100px" src={logo} alt="logo"/>
    </Navbar.Brand>
     
    </Nav>
    </Container>
  </Navbar>
    )
}