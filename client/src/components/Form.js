import Button from 'react-bootstrap/Button';
import { useState } from "react";
import Input from "./Input";
import Label from "./Label";
import Select from "./Select";
import TextArea from "./TextArea";
import { consulta } from "../hooks/useFetch"
export default function Form() {

    const [name, setName] = useState('');
    const [categoria, setCategoria] = useState('');
    const [ingredient, setIngredient] = useState('');
    const [instruction, setInstruction] = useState('');
    const [image, setImage] = useState('');
    const [response, setResponse] = useState('');  // Estado para almacenar la respuesta del servidor

    const handleFileChange = (e) => {
        setImage(e.target.files[0]);
    };
    // Maneja el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append("name", name);
        formData.append("categoria", categoria);
        formData.append("ingredient", ingredient);
        formData.append("instruction", instruction);
        formData.append("image", image);

        try {
            const res = await consulta('addrecipe', 'post', formData); // Pass FormData directly
            const text = await res.json();  // Convert response to JSON
            setResponse(text.message);  // Update state with the server response
        } catch (error) {
            console.error('Error fetching data:', error);
            setResponse('Error fetching data');  // Display error message
        }
    };
    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: '800px', margin: '0 auto', padding: '40px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9', fontSize: '16px' }}>
            <div>
                <Label texto="Titulo de la receta" />
                <Input tipo="text" onChange={(e) => setName(e.target.value)} style={{ width: '100%', padding: '10px', fontSize: '16px' }} />
                <br />
                <br />
                <Label texto="Categoria" />
                <Select onChange={(e) => setCategoria(e.target.value)} style={{ width: '100%', padding: '10px', fontSize: '16px' }} />
                <br />
                <br />
                <Label texto="Ingredientes" />
                <TextArea onChange={(e) => setIngredient(e.target.value)} style={{ width: '100%', padding: '10px', fontSize: '16px' }} />
                <br />
                <br />
                <Label texto="Instrucciones paso a paso" />
                <TextArea onChange={(e) => setInstruction(e.target.value)} style={{ width: '100%', padding: '10px', fontSize: '16px' }} />
                <br />
                <br />
                <div>
                    <input type="file" onChange={handleFileChange} accept="image/*" style={{ fontSize: '16px' }} />
                </div>
                <br />
                <Button variant="primary" size="lg" type="submit" style={{ width: '100%', fontSize: '16px', padding: '10px' }}>Enviar</Button>
                {response}
            </div>
        </form>
    );
}    