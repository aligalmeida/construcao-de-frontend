import { useForm } from "react-hook-form";
import InputNome from "../componentes/InputNome";
import InputEmail from "../componentes/InputEmail";
import InputSenha from "../componentes/InputSenha";
import Botao from "../componentes/Botao";
import { useNavigate } from "react-router-dom"; 

function FormPerfil() {
    const navigate = useNavigate();
    const {register, handleSubmit, formState: {errors}} = useForm();
    return (
        <form onSubmit={handleSubmit((data) => { navigate("/perfil") })}>
            <InputNome register={register} error={errors.nome}/>
            <InputEmail register={register} error={errors.email}/>
            <InputSenha register={register} error={errors.senha}/>
            <Botao texto="Salvar" />
        </form>

    );
}
export default FormPerfil;