function InputTelefone(props) {
    const regras = {
        required: "Telefone é obrigatório",
    };
    return (
        <>
            <label htmlFor="telefone">Telefone</label>
            <input type="tel" {...props.register("telefone", regras)} />
            {props.error && <p>{props.erro.message}</p>}
        </>
    );
}
export default InputTelefone;