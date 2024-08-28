export default function Input({ tipo, valor, onChange }) {
    return (
        <input
            type={tipo}
            maxLength="50"
            value={valor}
            onChange={onChange}
        />
    );
}