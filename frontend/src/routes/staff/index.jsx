import { Button, Card, Col,Container,Row,Table } from "react-bootstrap";
import { useEffect,useState } from "react";
import axios from "axios";
import StaffNavigationBar from "../../components/StaffNavigationBar";

export default function StaffIndex()
{
    return(
        <>
            <StaffNavigationBar/>
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>Create New Response</Card.Title>
                                <Card.Text style={{textAlign:'center'}}>
                                    <Button href="/staff/response" className="btn-lg w-100" variant="success">Create New Response</Button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Table>
                            <thead>
                                <tr>
                                    <th>Response ID</th>
                                    <th>Site</th>
                                    <th>Status</th>
                                    <th>View</th>
                                </tr>
                            </thead>
                            <tbody>

                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    )
}