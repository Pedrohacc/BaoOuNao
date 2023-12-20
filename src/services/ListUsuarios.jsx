

export const ListUsuarios = async (setUsuarios) => {
    const token = localStorage.getItem("TokenBaoOuNao");
    try {
      const response = await fetch(
        "http://localhost:8080/usuarios",
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
      setUsuarios(result);
   
     
     
    } catch (error) {
      console.error("Erro ", error);
    }
  };
  