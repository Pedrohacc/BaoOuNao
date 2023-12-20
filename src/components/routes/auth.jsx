export const isAuth = () => {
    const user = localStorage.getItem("TokenBaoOuNao");
    return !!user; // Retorna true se o usuário existir, false se não existir
  };