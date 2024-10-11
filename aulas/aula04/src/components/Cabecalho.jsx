import InputPesquisar from "./InpuPesquisar";
import Logo from "./Logo";
import Titulo from "./Titulo";


function Cabecalho() {
    return (
        <header>
            <Logo imagem="" texto="Logo de Aplicação"/>
            <Titulo texto="Aluno Online" />
            <InputPesquisar />
            <Logo imagem="" texto="Icone Pesquisar" />
        </header>

    );
}
export default Cabecalho;