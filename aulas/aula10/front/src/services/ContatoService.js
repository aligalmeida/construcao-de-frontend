import axios from "axios";

const url = import.meta.env.VITE_API_URL;

function buscarTodos() {
return axios
.get(url)
.then((response) => {
    return {sucesso: true, dados: response.data };
})
.catch((error) => {
    return { sucesso: false, mensagem: error.message };
});
}

function buscar(id) {

}

function adicionar(contato) {
    return axios.post(url, contato)
    .then((response) => { return {sucesso: true, dados: response.data}; }) // sucesso dados
    .catch((error) => { return {sucesso: false, mensagem: error.message}; }); // deu ruim mensagem
}

function atualizar (contato) {

}

function remover (id) {
    return axios
    .delete(`${url}/${id}`)
    .then((reponse) => {
        return { sucesso: true, dados: responde.data };
    })
    .catch((error) => {
        return { sucesso: false, mensagem: error.message };
    });


}

export { buscarTodos, buscar, adicionar, atualizar, remover };