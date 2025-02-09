import {Card, Col, Container, Navbar, Row,Nav,NavDropdown} from 'react-bootstrap';


export default function Index()
{
    return(
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">It's Secure Ltd</Navbar.Brand>
                    <Navbar.Collapse className="justify-content-end">
                        <Nav>
                            <Nav.Link href="/staff/login">Staff Login</Nav.Link>
                            <Nav.Link href="/customer/login">Customer Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <Card.Img variant='top' src='https://internationalsecurityjournal.com/wp-content/uploads/2022/02/shutterstock_359957216.jpg' />
                            <Card.Body>
                                <Card.Title>Alarm Response</Card.Title>
                                <Card.Text>We respond to alarms</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}