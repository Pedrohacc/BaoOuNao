import { jwtDecode } from "jwt-decode";


export const curtida = async ( IdProp ) => {
      let token = localStorage.getItem("TokenBaoOuNao");
      let usuarioDecodificado = jwtDecode(token);
  const curtida = { 
    usuario: { id:usuarioDecodificado.id},
    proposta: {id:IdProp}
  };

  console.log(curtida)
  try {
    const resposta = await fetch("http://localhost:8080/curtir", {
      method: "POST",
      body: JSON.stringify(curtida),
      headers: { "Content-type": "application/json",
      "Authorization": `Bearer ${token}`
     },
      
    });
    
    if(resposta.status === 201 || resposta.status === 200){
      console.log(resposta.status)
      return { sucesso: true };
    }else{
      return { sucesso: false, erro: "Você ultrapassou a quantidade de curtida disponível" };
    }

  } catch (erro) {
    
    return { sucesso: false, erro: "Erro na Requisição ao Servidor, favor procurar o suporte" };
  }


};
