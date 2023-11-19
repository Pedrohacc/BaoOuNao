import { useState} from "react";
import React from "react";
import { handleSubmit } from "../../services/AutLogin";
import LoginErr from "../Erros/LoginErr";
import { useNavigate } from "react-router-dom";



const style = {
  backgroundImage: "url('CapaLoginAut.jpg')",
};



const Login = () => {
  const navigate = useNavigate();


const [ login, setLogin ] = useState('');
const [ senha, setSenha ] = useState('');
const [error, setError] = useState(null);
const [validaPop, setValidaPop] = useState(false)
   
const handleLoginSubmit = async (e) => {
  e.preventDefault();

  const { sucesso, usuarioDecodificado, erro } = await handleSubmit(login, senha);

  if (sucesso) {
    // Lidar com o login bem-sucedido
   // console.log("Login bem-sucedido:", usuarioDecodificado);
   navigate("/Home", { state: { usuarioDecodificado } });

  } else {
    setError(erro);
    setValidaPop(true);
  }
};
  return (
    <>
      <div className="min-h-screen  bg-white flex">
        <div className="flex-1 p-4">
          <div className="mx-auto w-full max-w-sm">
            <h1 className="mt-10 text-3xl h-20 w-auto text-center text-cinza font-extralight">
              <strong className="font-bold">Bão</strong> ou{" "}
              <strong className="font-bold"> Não</strong>
            </h1>
          </div>
          <div className="mt-2">
            <form onSubmit={handleLoginSubmit}>
              <div className="mb-5 mx-24">
                <label className="text-cinza text-sm">Usuário:</label>
                <input
                  type="text"
                  name="login"
                  placeholder="Digite seu Login"
                  className="px-1 appearance-none block min-w-full py-4 leading-tight text-cinza border-1 border-b-2 
                  border-cinza-70 hover:border-cinza delay-75 outline-none"
                  value={login}
                  onChange={e => setLogin(e.target.value)}
                />
              </div>
              <div className="mt-8 mx-24">
                <label className="text-cinza text-sm">Senha:</label>
                <input
                  type="password"
                  placeholder="********"
                  name="password"
                  className="px-1 appearance-none block min-w-full py-4 leading-tight text-cinza bg-none outline-none border-b-2 border-cinza-70 hover:border-cinza delay-75"
                  value={senha}
                  onChange={e => setSenha(e.target.value)}
                />
              </div>
              <div className="mt-11 mx-24">
                <button
                  className="bg-secundaria text-white px-3 appearance-none block min-w-full py-4 leading-tight rounded-full 
                transition ease-in-out delay-150 bg-secundaria-500 hover:-translate-y-1 hover:scale-100 hover:bg-primaria duration-300"
                type="submit"
                >
                  Entrar   
                </button>
              </div>
              <div clhassName="flex justify-center h-auto   ">
                <img
                  src="logo-iftm.png"
                  alt=""
                  className="h-14 mt-14   bottom-10 mx-auto"
                />
              </div>
            </form>
          </div>
        </div>

        <div
          className="hidden sm:block relative flex-1 p-4 bg-cover"
          style={style}
        ></div>
      </div>
      {validaPop && <LoginErr error={error} setValidaPop={setValidaPop} />}
    </>
  );
};

export default Login;
