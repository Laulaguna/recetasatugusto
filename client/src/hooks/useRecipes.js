import { useState, useEffect } from "react";

const useRecipes = () => {
    const [allRecipes, setAllRecipes] = useState();

    useEffect(() => {
        fetch(`"http://localhost:3012/getrecipe?limit=5"`)
            .then((res) => res.json())
            .then((data) => {
                const recipes = data.results.map((r) => [r.name, r.url]);
                setAllRecipes(recipes);
            })
            .catch((error) => {
                console.error("Error fetching Recipe data:", error);
            });
    }, []);

    return allRecipes;
};

export default useRecipes;