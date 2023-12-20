import { jwtDecode } from "jwt-decode";

export const CurtiuOuNao  = async (idUser,idProposta) => {
  let token = localStorage.getItem("TokenBaoOuNao");
  let usuarioDecodificado = jwtDecode(token);
  try {
    
    const response = await fetch(
      `http://localhost:8080/curtir/existe/${usuarioDecodificado.id}/${idProposta}`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Erro HTTP! Status: ${response.status}`);
    }
    const result = await response.json();
    console.log(result)
    return result; 

  } catch (error) {
    console.error("Erro ", error);
    return null; 
  }
};
