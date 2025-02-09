import { Container,Navbar,Nav,NavDropdown } from "react-bootstrap";
import { useEffect,useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function StaffNavigationBar(){
    const [me,setMe] = useState({});
    const [cookies,setCookie] = useCookies(['token'])
    const [loaded,setLoaded] = useState(false);
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get('http://localhost:3000/users/@me',{
            headers:{
                Authorization:'Bearer '+cookies.token
            }
        }).then((res)=>{
            setMe(res.data);
            setLoaded(true);
        }).catch((err)=>{
            if(err.response.data.loggedIn===false)
            {
                navigate('/staff/login')
            }
        })
    },[cookies.token,navigate])

    if(loaded)
    {
        return (
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
              <Container>
                <Navbar.Brand href='/staff'>It's Secure Ltd</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href='/staff/response'>Create Response</Nav.Link>
                    <Nav.Link>Reports</Nav.Link>
                  </Nav>
                  <Nav>
                    <NavDropdown title={'Signed in as: '+me.name}  id="collapsible-nav-dropdown">
                      <NavDropdown.Item>Settings</NavDropdown.Item>
                      <NavDropdown.Divider/>
                      <NavDropdown.Item href='/logout'>Logout</NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                  
                </Navbar.Collapse>
              </Container>
            </Navbar>
        );
    }
}