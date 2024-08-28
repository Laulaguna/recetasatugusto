const Recipe = require("../models/recipe.model")

const getrecipe = async (req, res) => {
    try {

        let pag = parseInt(req.query.pag)
        let limit = parseInt(req.query.limit)


        pag = !isNaN(pag) ? pag : 1;
        limit = !isNaN(limit) ? limit : 10;
        limit = limit > 10 ? 10 : limit < 1 ? 5 : limit;

        const numRecipes = await Recipe.countDocuments()

        let numPage = Math.ceil(numRecipes / limit)

        if (pag > numPage) {
            pag = numPage;
        }

        if (pag < 1) {
            pag = 1;
        }

        const allRecipes = await Recipe.find().skip((pag - 1) * limit).limit(limit)
        res.json({
            previewPage: pag === 1 ? null : pag - 1,
            nextPage: numPage >= pag + 1 ? pag + 1 : null,
            data: allRecipes
        })

    } catch (error) {
        console.log(error);

    }
}
//buscar una receta por nombre, se debe enviar en la url de la peticion /getRecipe/:name
const getRecipeName = async (req, res) => {
    const { name } = req.params;
    const recipeByName = await Recipe.find({ name: name })
    res.json(recipeByName)
}
//buscar una receta por id, se debe enviar en la url de la peticion /getRecipe/:id


//buscar una receta por id, se debe enviar en la url de la peticion /getRecipe/:id






const getRecipeById = async (req, res) => {
    const { id } = req.params;
    const recipeById = await Recipe.findById(id);
    res.json(recipeById)
}

// añadir una nueva receta
const add = async (req, res) => {
    console.log(req.file)
    try {
        const newRecipe = new Recipe(req.body);
        const findRecipe = await Recipe.find({ name: newRecipe.name })

        if (findRecipe.length === 0) {
            if (req.file.path) {
                newRecipe.image = req.file.path;
            }
            //si la receta no está en la BD
            /* const recipe = new Recipe(newRecipe) */
            const createdRecipe = await newRecipe.save();
            return res.status(200).json({ message: "Receta creada", data: createdRecipe })
        } else {
            return res.status(200).json({ message: "La receta está repetida" })
        }
    } catch (error) {
        console.log(error)
    }
}
const deleteRecipe = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteRe = await Recipe.findByIdAndDelete(id);
        if (deleteRe) {
            res.status(201).json({ success: true, message: deleteRe })
        } else {
            res.status(200).json({ success: false, message: "No existe el id" })
        }

    } catch (error) {
        res.status(500).json(error)
    }



}

const updateRecipe = async (req, res) => {
    try {
        const { id } = req.query;
        const recipeBody = req.body;
        const updateRecipe = await Recipe.findByIdAndUpdate(id, recipeBody, { new: true })
        if (!updateRecipe) {
            res.json({ success: false, message: "el id no existe" })
        } else {
            res.json(updateRecipe)
        }

    } catch (error) {
        res.status(200).json(error)
    }

}

const searchRecipe = async (req, res) => {
    try {
        // Obtener la palabra de búsqueda desde los parámetros de la URL
        const searchTerm = req.params.term;

        // Realizar una búsqueda en la base de datos usando la palabra
        const recipes = await Recipe.find({
            name: { $regex: searchTerm, $options: 'i' }  // Búsqueda insensible a mayúsculas/minúsculas
        });

        const count = recipes.length;
        if (count > 0) {
            return res.status(200).json({
                message: `Se encontraron ${count} receta(s)`,
                data: recipes
            });
        } else {
            return res.status(404).json({
                message: "No se encontraron recetas",
                count: 0
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Error en el servidor", error });
    }
}

module.exports = { getrecipe, getRecipeName, getRecipeById, add, deleteRecipe, updateRecipe, searchRecipe }