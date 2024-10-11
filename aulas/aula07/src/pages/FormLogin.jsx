import { useForm } from "react-hook-form";
import InputEmail from "../componentes/InputEmail";
import InputSenha from "../componentes/InputSenha";
import Botao from "../componentes/Botao";
import { useNavigate } from "react-router-dom";


function FormLogin() {
    const navigate = useNavigate();
    const {register, handleSubmit, formState: {errors}} = useForm();
    return (
        <form onSubmit={handleSubmit((data) => { navigate("/home") })}>
            <InputEmail register={register} error={errors.email}/>
            <InputSenha register={register} error={errors.senha}/>
            <Botao texto="Entrar" />
        </form>

    );
}
export default FormLogin;