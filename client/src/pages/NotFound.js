import React from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (

        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', marginTop: '50px' }}>
            <Row>
                <Col xs={12} className="text-center">
                    <h1 className="display-1 fw-bold">404</h1>
                    <h2 className="mb-3">Página no encontrada</h2>
                    <p className="mb-4">Lo sentimos, la página que estás buscando no existe.</p>
                    <Button as={Link} to="/" variant="primary">
                        Volver a la página principal
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default NotFound;