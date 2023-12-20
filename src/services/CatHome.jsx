export const  listCat = async( token, setPropostas) => {
    try {
        const response = await fetch('http://localhost:8080/propostas', {
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
      setPropostas(result);
         } catch (error) {
            console.error("Erro ao buscar dados do usuário:", error);
        
    }

}