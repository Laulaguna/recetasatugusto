// src/pages/SearchRecipe.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useParams, Link } from 'react-router-dom';
import { consulta } from '../hooks/useFetch';


const SearchRecipe = () => {
    const { term } = useParams(); // Obtén el término de búsqueda de los parámetros de la URL
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await consulta(`recipes/search/${term}`, 'get');
                const data = await response.json();
                setRecipes(data.data || []);
            } catch (err) {
                setError('Error al buscar recetas');
            }
        };

        fetchRecipes();
    }, [term]);


    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Resultados de búsqueda para: {term}</h1>
            {error && <p>{error}</p>}
            {recipes.length > 0 ? (
                <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                    {recipes.map(recipe => (
                        <li key={recipe._id} style={{ marginBottom: '20px', margin: '10px', flexBasis: '300px' }}>

                            <div style={{ border: '1px solid #ddd', borderRadius: '5px', padding: '10px', maxWidth: '300px', margin: 'auto' }}>
                                <h2>{recipe.name}</h2>
                                <img
                                    src={recipe.image}
                                    alt={recipe.name}
                                    style={{ width: '100%', borderRadius: '5px' }}
                                />
                                <p>{recipe.categoria}</p>

                                <Link to={`/onerecipe?recipe=${recipe._id}`}> <button className="success" size="sm">
                                    Ver receta
                                </button>
                                </Link>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No se encontraron recetas.</p>
            )}
        </div>
    );
};

export default SearchRecipe;
