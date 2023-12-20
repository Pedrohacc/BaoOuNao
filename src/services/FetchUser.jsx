export const fetchUsuario = async (token, id, setUsuario) => {

  console.log(token + "" + id + "")
    try {
      const response = await fetch(`http://localhost:8080/usuarios/${id}`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      });
  
      if (!response.ok) {
        throw new Error(`Erro HTTP! Status: ${response.status}`);
      }
  
      const result = await response.json();
      console.log(result);
      setUsuario(result);
    } catch (error) {
      console.error("Erro ao buscar dados do usuário:", error);
    }
  };