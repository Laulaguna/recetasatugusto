export default function TextArea({ tipo, valor, onChange }) {
    return (
        <textarea
            type={tipo}
            maxLength="50"
            value={valor}
            onChange={onChange}
            name="descripcion" id="descripcion" rows="6" cols="60"></textarea>
    );
}