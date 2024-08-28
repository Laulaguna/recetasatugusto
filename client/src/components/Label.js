export default function Label({ texto, check }) {
    let res;
    check ? res = <label>{texto}</label> : res = <label>{texto + ':   '}</label>
    return (
        <>{res}</>
    )
}