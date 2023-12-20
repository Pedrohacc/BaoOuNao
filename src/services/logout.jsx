

const Logout = () => {
  

  // Limpar o token do localStorage
  localStorage.removeItem("TokenBaoOuNao");

  // f5
  window.location.reload();
};

export default Logout;
