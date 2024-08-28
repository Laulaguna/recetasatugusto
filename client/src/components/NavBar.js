import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { InputGroup, Form, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function NavBar() {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Redirige a la página de búsqueda con el término de búsqueda
        if (searchTerm.trim()) {

            navigate(`/searchrecipe/${searchTerm}`);
        }
    };

    return (
        <>


            <br />
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Nav className="me-auto">

                        <Nav.Link href="/form">Crea</Nav.Link>
                        <Nav.Link href="/recipes">Todas</Nav.Link>

                        {/*                         <li><Link to="/">Home</Link></li>
                <li><Link to="/form">Crea una receta</Link></li>
                <li><Link to="/recipes">Todas las recetas</Link></li> */}


                    </Nav>
                </Container>
            </Navbar>
            <Form onSubmit={handleSubmit}>
                <InputGroup className="mb-3" style={{ maxWidth: '600px', margin: '0 auto' }}>
                    <Form.Control
                        placeholder="Escribe la receta que quieres buscar"
                        //te recomiendo escribir: gofres
                        aria-label="Término de búsqueda"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Button variant="warning" type="submit">
                        Buscar
                    </Button>
                </InputGroup>
            </Form>

        </>
    );
}
