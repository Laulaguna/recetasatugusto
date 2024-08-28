const express = require("express");
const router = express.Router();
const { getrecipe, searchRecipe, getRecipeName, getRecipeById, add, deleteRecipe, updateRecipe } = require("../controllers/recipe.controllers")
const upload = require("../../middleware/upload")

router.get("/getrecipe", getrecipe);
router.get("/getbyid/:id", getRecipeById);
router.get('/recipes/search/:term', searchRecipe);
router.get("/getbyname/:name", getRecipeName);
router.post("/addrecipe", upload.single("image"), add);
router.delete("/delete/:id", deleteRecipe);
// el id lo vamos a enviar a través de los query
router.put("/updaterecipe", updateRecipe);


module.exports = router 