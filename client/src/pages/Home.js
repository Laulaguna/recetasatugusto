
import React from 'react';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import './Home.css'; // Archivo CSS personalizado
import papparImage from '../images/pappardelleatuntomate.jpg';
import ensaladaImage from '../images/ensaladamixta.jpg';
import polloImage from '../images/ensaladapolloaguacateketo.jpg';

export default function Home() {
    return (
        <div>
            {/* Sección de Bienvenida */}
            <section className="welcome-section">
                <Container>
                    <Row>
                        <Col md={6} className="text-center">
                            <img src="https://img.freepik.com/premium-vector/cute-chef-boy-cartoon-art-illustration-mascot_296684-69.jpg?w=360" alt="Delicious soup" className="img-fluid mb-4" />
                        </Col>
                        <Col md={6}>
                            <h2>Recetas a tu Gusto!</h2>
                            <p className="lead">
                                ¡Aquí encontrarás una comunidad apasionada por la cocina, donde puedes explorar miles de recetas categorizadas,
                                hacer favoritas tus preferidas y crear tus propias obras maestras culinarias. ¡Tu próxima receta estrella te espera!
                            </p>
                            <Button variant="primary" size="lg">Explora Recetas</Button>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Sección de Recetas Destacadas */}
            <section className="featured-recipes py-5">
                <Container>
                    <h3 className="text-center mb-4">Recetas Destacadas</h3>
                    <Row>
                        <Col md={4}>
                            <Card>
                                <Card.Img variant="top" src={papparImage} alt="Receta 1" />
                                <Card.Body>
                                    <Card.Title>Calabacin al Pesto</Card.Title>
                                    <Button variant="secondary">Ver Receta</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <Card.Img variant="top" src={ensaladaImage} alt="Receta 2" />
                                <Card.Body>
                                    <Card.Title>Ensalada Mixta</Card.Title>
                                    <Button variant="secondary">Ver Receta</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <Card.Img variant="top" src={polloImage} alt="Receta 3" />
                                <Card.Body>
                                    <Card.Title>Pollo y Aguacate</Card.Title>
                                    <Button variant="secondary">Ver Receta</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Sección de llamada a la acción */}
            <section className="call-to-action text-center py-5" style={{ backgroundColor: '#ffeb99' }}>
                <Container>
                    <h4>¡Regístrate pronto!</h4>
                    <p>Únete a nuestra comunidad de amantes de la cocina y comparte tus creaciones con el mundo.</p>
                    <Button variant="success" size="lg">Regístrate en unos dias</Button>
                </Container>
            </section>
        </div>
    );
}
