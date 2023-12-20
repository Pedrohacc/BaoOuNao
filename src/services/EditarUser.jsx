import bcrypt from 'bcryptjs';

export const EditarUser = async (id,nome,
    sobrenome,
      tipo,
      email,
      login,
      senha,
      role, ativo, setAlterar) => {
    const token = localStorage.getItem("TokenBaoOuNao");
    const salt = await bcrypt.genSalt(12);

    // Hash da senha com o salt
    const hashedPassword = await bcrypt.hash(senha, salt);  
    
    let roleu="";
    if (role === "Moderator"){
         roleu= "MODERATOR"
    }
    if(role ==="User"){
         roleu= "USER"
    } 
    if(role ==="Administrator"){
        roleu = "ADMINISTRATOR"
    }
    const usuario = { 
        nome,
        sobrenome,
          tipo,
          email,
          login,
          senha:hashedPassword,
          role:roleu,
          ativo
          
      };
      console.log(usuario);   
    
    try {
      const resposta = await fetch(`http://localhost:8080/usuarios/${id}`, {
        method: "PUT",
        body: JSON.stringify(usuario),
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
     
    console.log(usuario)
  
      if (resposta.status === 201 || resposta.status === 200) {
        
        return   true ;
  
      } else {
        return {
          sucesso: false,
          erro: "Erro na Requisição ao Servidor, favor procurar o suporte",
        };
      }
    } catch (erro) {
      return {
          
        sucesso: false,
        erro: "Erro na Requisição ao Servidor, favor procurar o suporte",
      };
    }
  };
  