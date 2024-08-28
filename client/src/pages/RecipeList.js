import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css"; // Importa el archivo CSS para los estilos



// Componente principal que maneja la lista de productos y el carrito
export default function RecipeList() {

    const navigate = useNavigate();
    const [allRecipes, setRecipes] = useState([]);


    useEffect(() => {

        fetch(`http://localhost:3012/getrecipe?pag=1&limit=6`)
            .then((res) => res.json())
            .then((res) => {
                console.log(res.data);
                setRecipes(res.data)
            })
    }, [])


    return (

        <div className="container" style={{ backgroundColor: '#d4edda', padding: '20px' }}>
            <h1>Todas las Recetas</h1>
            <div className="row">
                {allRecipes.map((recipe) => (
                    <div className="col-md-4" key={recipe.id}>
                        <div className="card">
                            <img src={recipe.image} className="card-img-top" alt={recipe.name} />
                            <div className="card-body">
                                <h5 className="card-title">{recipe.name}</h5>
                                <button onClick={() => navigate(`/onerecipe?recipe=${recipe._id}`)} className="success">Ver Receta</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div>


            </div>
        </div>


    )
}
