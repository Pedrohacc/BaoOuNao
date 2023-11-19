import { jwtDecode } from "jwt-decode";





   



export const handleSubmit = async (login, senha) => {
   
  const usuario = {
    login,
    senha,
  };

  try {
    const resposta = await fetch("http://localhost:8080/login", {
      method: "POST",
      body: JSON.stringify(usuario),
      headers: { "Content-type": "application/json" },
    });
     
    const resultado = await resposta.text();

    if (resultado !== "") {
      const token = resultado;
      const usuarioDecodificado = jwtDecode(token);
      localStorage.setItem("TokenBaoOuNao", token);
   
      return { sucesso: true, usuarioDecodificado };
      
    } else {
       
      return { sucesso: false, erro: "Usuario e senha incorretos" };
    }
  } catch (erro) {
    
    console.error("Erro durante o login:", erro);
    return { sucesso: false, erro: "Erro na Requisição ao Servidor, favor procurar o suporte" };
  }


};
