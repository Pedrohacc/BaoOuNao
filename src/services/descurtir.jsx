import { jwtDecode } from "jwt-decode";

export const descurtida = async (idProposta) => {
    let token = localStorage.getItem("TokenBaoOuNao");
    let usuarioDecodificado = jwtDecode(token);
    console.log(idProposta)
    try {
      const resposta = await fetch(`https://baoounao.iftmparacatu.app.br/curtir/${usuarioDecodificado.id}/${idProposta}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
          "Authorization": `Bearer ${token}`
        },
      });
   console.log(resposta.status)
      if (resposta.ok) {
        return { sucesso: true };
      } else {
        const erro = await resposta.json(); // Tenta obter a mensagem de erro do servidor
        return { sucesso: false, erro: erro.message || "Erro ao descurtir a proposta" };
      }
  
    } catch (erro) {
      console.error("Erro na requisição de descurtida:", erro);
      return { sucesso: false, erro: "Erro na requisição ao servidor" };
    }
  };