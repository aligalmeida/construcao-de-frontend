import Botao from "../components/Botao";
import Rodape from "../components/Rodape";
import Logo from "../components/Logo";
import Titulo from "../components/Titulo";
import InputEmail from "../components/InputEmail";
import InputSenha from "../components/InputSenha";
import Link from "../components/Link";
import Conteudo from "../components/Conteudo";
import InputPesquisar from "../components/InpuPesquisar";

function Login() {
    return (
        <>
        <Conteudo>
            <Logo imagem="https://www.svgrepo.com/show/520490/student.svg" texto="Logo da Aplicação"/>
            <Titulo texto="Aluno Online"/>
            <InputEmail />
            <InputSenha />
            <InputPesquisar />
            <Botao texto="Entrar" />
            <Link texto="Esqueceu a Senha?" />
        </Conteudo>
        <Rodape />
        </>
    );
}
export default Login;