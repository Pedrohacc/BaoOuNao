export const ListQuantidadeCurtidas = async (id) => {
    const token = localStorage.getItem("TokenBaoOuNao");
    try {
      const response = await fetch(
        `https://baoounao.iftmparacatu.app.br/curtir/contar/${id}`,
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
      return result; // Retorne a quantidade de curtidas
  
    } catch (error) {
      console.error("Erro ", error);
      return null; // Retorne 0 em caso de erro
    }
  };
  