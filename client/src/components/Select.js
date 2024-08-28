export default function Select({ tipo, valor, onChange }) {
    return (
        <select name="Categoria" id="Categoria"
            type={tipo}
            maxLength="50"
            value={valor}
            onChange={onChange}>
            <option>Recetas Keto</option>
            <option>Recetas Vegetarianas</option>
            <option>Recetas Veganas</option>
            <option>Recetas Sin Gluten</option>
            <option>Recetas de Bajo Contenido Calórico</option>
            <option>Recetas de Cocina Rápida</option>
            <option>Recetas Tradicionales</option>
            <option>Recetas para Niños</option>
        </select>
    );
}