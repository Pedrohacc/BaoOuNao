export const ModerarProp = async (proposta, situacao, feedback, setAlterar ) => {
  let token = localStorage.getItem("TokenBaoOuNao");
  let id = proposta.id
  const alteracao = {
    situacao,
    feedback,
  };

  
  try {
    const resposta = await fetch(`https://baoounao.iftmparacatu.app.br/propostas/moderar/${id}`, {
      method: "PATCH",
      body: JSON.stringify(alteracao),
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
   
  console.log(alteracao)

    if (resposta.status === 201 || resposta.status === 200) {
      console.log(resposta.status);
      setAlterar(false)
      return   true ;

    } else {
      return {
        sucesso: false,
        erro: "Erro na Requisição ao Servidor, favor procurar o suporte",
      };
    }
  } catch (erro) {
    console.log(`http://localhost:8080/propostas/moderar/${id}`)
  console.log(alteracao)
    return {
        
      sucesso: false,
      erro: "Erro na Requisição ao Servidor, favor procurar o suporte",
    };
  }
};
