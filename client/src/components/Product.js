import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import { useNavigate, useSearchParams } from "react-router-dom";
import { consulta } from "../hooks/useFetch";
import './productStyles.css';

export default function Product({ product, onAddToFavorite }) {
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const [queryParameters] = useSearchParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {

        const fetchData = async () => {
            setIsLoading(true);
            try {
                const recipeId = queryParameters.get("recipe");

                if (recipeId) {
                    const response = await consulta(`getbyid/${recipeId}`, 'get');

                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const data = await response.json();
                    setRecipe(data);

                } else {
                    console.error("No se encontró el parámetro 'recipe' en la URL.");
                }
            } catch (error) {
                console.error('Error fetching the recipe:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="product-container">
            {isLoading ? (
                <p>Cargando...</p>
            ) : (
                recipe && (
                    <div className="product-details">
                        <img src={recipe.image} alt={recipe.name} className="product-image" />
                        <h3 className="product-title">{recipe.name}</h3>
                        <h4 className="product-category">{recipe.category}</h4>
                        <section className="product-section">
                            <h5>Ingredientes:</h5>
                            <p>{recipe.ingredient}</p>
                        </section>
                        <section className="product-section">
                            <h5>Instrucciones:</h5>
                            <p>{recipe.instruction}</p>
                        </section>
                        <Button className="favorite-button" onClick={() => onAddToFavorite(recipe)}>
                            Añadir a Favoritos
                        </Button>
                    </div>
                )
            )}
        </div>
    );
}
