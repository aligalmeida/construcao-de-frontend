import Cabecalho from "../components/Cabecalho";
import Conteudo from "../components/Conteudo";
import InputEmail from "../components/InputEmail";
import InputSenha from "../components/InputSenha";
import Secao from "../components/Secao";
import Menu from "../components/Menu";
import Botao from "../components/Botao";

function Perfil() {
    return (
        <>
        <Cabecalho></Cabecalho>
        <Conteudo>
            <Menu />
            <Secao texto="Perfil do Usuário">
                <InputEmail />
                <InputSenha />
                <Botao texto="Salvar" />
            </Secao>
        </Conteudo>
        </>
    );
}
export default Perfil;