import { useNavigate, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "../App.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function DetailRecipe() {
    const navigate = useNavigate();
    const [queryParameters] = useSearchParams();
    const [allRecipes, setRecipes] = useState([]);

    // useEffect para obtener la receta basada en el parámetro de consulta
    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3012/onerecipe?recipe=${queryParameters.get("recipe")}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log(data);
                setRecipes(data);  // Se asume que `data` es un array de recetas
            } catch (error) {
                console.error('Error fetching the recipe:', error);
            }
        };

        fetchData();
    }, [queryParameters]);


    return (
        <div className="container">
            <h1>Detalle de la receta</h1>
            <div className="row">
                {allRecipes.map((recipe) => (
                    <div className="col-md-4" key={recipe.id}>
                        <Card style={{ width: '18rem' }}>

                            <Card.Img variant="top" src={recipe.image} />
                            <Card.Body>
                                <Card.Title>{recipe.name}</Card.Title>
                                <Card.Text>
                                    {recipe.description}
                                </Card.Text>
                                <Button variant="primary" size="sm">Go somewhere</Button>

                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </div>

    )
}

