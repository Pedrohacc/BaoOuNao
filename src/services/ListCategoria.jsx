

export const ListCategoria = async (setCategorias) => {
  const token = localStorage.getItem("TokenBaoOuNao");
  try {
    const response = await fetch(
      "https://baoounao.iftmparacatu.app.br/propostas/retornarCategoria",
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
    setCategorias(result);
 
   
   
  } catch (error) {
    console.error("Erro ", error);
  }
};
