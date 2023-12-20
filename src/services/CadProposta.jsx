

export const handleSubmitProposta = async ( titulo,
descricao,
  categoria,
  qtdLikes,
  id,
  situacao,
  feedback ) => {
    const token = localStorage.getItem("TokenBaoOuNao");
  const proposta = { 
    titulo,
    descricao,
    categoria,
    qtdLikes,
    usuario: { id },
    situacao,
    feedback
  };
console.log(proposta)
  try {
    const resposta = await fetch("https://baoounao.iftmparacatu.app.br/propostas", {
      method: "POST",
      body: JSON.stringify(proposta),
      headers: { "Content-type": "application/json",
      "Authorization": `Bearer ${token}`
     },
      
    });
    
    if(resposta.status === 201 || resposta.status === 200){

      return { sucesso: true };
    }else{
      return { sucesso: false, erro: "Você ultrapassou o quantidade de proposta para essa categoria." };
    }

  } catch (erro) {
    
    return { sucesso: false, erro: "Erro na Requisição ao Servidor, favor procurar o suporte" };
  }


};
