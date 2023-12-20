import bcrypt from 'bcryptjs';

export const handleSubmitUsuario = async ( nome,
    sobrenome,
      tipo,
      email,
      login,
      senha,
      role ) => {
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
          
      };
      console.log(usuario);    
      try {
        const resposta = await fetch("https://baoounao.iftmparacatu.app.br/usuarios", {
          method: "POST",
          body: JSON.stringify(usuario),
          headers: { "Content-type": "application/json",
          "Authorization": `Bearer ${token}`
         },
          
        });
        
        if(resposta.status === 201 || resposta.status === 200){
    
          return { sucesso: true };
        }else{
          return { sucesso: false, erro: "Usuário não cadastratado" };
        }
    
      } catch (erro) {
        
        return { sucesso: false, erro: "Erro na Requisição ao Servidor, favor procurar o suporte" };
      }
    
    
    };
    