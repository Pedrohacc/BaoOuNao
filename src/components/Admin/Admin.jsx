import React from "react";
import { useState, useEffect } from "react";
import { ListUsuarios } from "../../services/ListUsuarios";
import { handleSubmitUsuario } from "../../services/CadUsuario";
import Sucesso from "../exception/sucesso";
import { EditarUser } from "../../services/EditarUser";

const Admin = ({ setValidaAdmin }) => {
  const [alterar, setAlterar] = useState(false);
  const [ estadoAlt ,setEstadoAlt] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [pressiona, setPressiona] = useState(true);
  const [cad, setCad] = useState(false);
  const [usuarios, setUsuarios] = useState([]);
  const [tipo, setTipo] = useState();
  const [role, setRole] = useState();
  const [sucess, setSucess] = useState(null);
  const [popup, setPopup] = useState(null);
  const [nome , setNome] = useState();
  const [sobrenome, setSobrenome] = useState();
  const [email, setEmail] = useState();
  const [login, setLogin] = useState();
  const [senha, setSenha] = useState("");

  const token = localStorage.getItem("TokenBaoOuNao");

  const ArrayTipo = ["Professor", "Estudante", "Servidor"];
  const ArrayRole = ["Moderator", "User", "Administrator"];

  useEffect(() => {
    ListUsuarios(setUsuarios);
  }, []);

  function closeModal() {
    setValidaAdmin(false);
    document.getElementById("my-modalAdmin").classList.add("hidden");
  }

  function handleFixa(x) {
    if (x === "Lista_Users") {
      setPressiona(true);
      setCad(false);
    }

    if (x === "cad_Users") {
      setCad(true);
      setPressiona(false);
    }
  }
  const handleTipo = async (tip) => {
    setTipo(tip);
  };
  const handleRole = async (rol) => {
    setRole(rol);
  };

  function editar(usuario){
    
    let id = usuario.id
      EditarUser(id)
  }

  const handleCadUser = async (e) => {
    e.preventDefault();
    if (senha !==""){
    const { sucesso, erro } = await handleSubmitUsuario(
      
      nome,
    sobrenome,
      tipo,
      email,
      login,
      senha,
      role 
    );
  
   
    if (sucesso) {
      setSucess("Proposta Cadastrada com sucesso!");
      setPopup(true);
     setTipo("");
     setRole("") 
     setNome("");
     setSobrenome("");
     setEmail("");
     setLogin("");
     setSenha("");
     setPressiona(true);
      setCad(false);

    }
  }
  };




  return (
    <>
      <div class="fixed z-10 inset-0 overflow-y-auto" id="my-modalAdmin">
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div class="fixed inset-0 transition-opacity" aria-hidden="true">
            <div class="absolute inset-0 bg-gray-200 opacity-75"></div>
          </div>
          <div
            class="inline-block align-bottom  bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-2/3"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <h2 className="text-2xl font-normal leading-7 text-cinza text-center ">
              Painel do Administrador
            </h2>
            <div class="flex gap-4 justify-center  mt-5">
              <div
                draggable="true"
                role="button"
                title="Hover chip"
                className={`${
                  cad
                    ? "h-8  pl-3 px-1 w-max flex  items-center rounded-full bg-primaria text-white  hover:bg-opacity-95 "
                    : " pl-3 h-8 px-1 w-max flex  items-center rounded-full bg-cinza  text-white  hover:bg-opacity-95  hover:text-white hover:caret-zinc-500"
                } sm:w-32 cursor-pointer`}
                onClick={() => handleFixa("cad_Users")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                  />
                </svg>

                <span class="pl-2 block text-xs font-medium">Cadastrar </span>
              </div>

              <div
                draggable="true"
                role="button"
                title="Hover chip"
                className={`${
                  pressiona
                    ? "h-8  pl-3 px-1 w-max flex  items-center rounded-full bg-primaria text-white  hover:bg-opacity-95  "
                    : " pl-3 h-8 px-1 w-max flex  items-center rounded-full bg-cinza  text-white  hover:bg-opacity-95  hover:text-white hover:caret-zinc-500"
                } sm:w-32 cursor-pointer`}
                onClick={() => handleFixa("Lista_Users")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                  />
                </svg>

                <span class="pl-2 block text-xs font-medium">Usuários</span>
              </div>
            </div>
            {pressiona ? (
              <table class="min-w-full divide-y divide-gray-200 overflow-x-auto mt-2">
                <thead class="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Usuário
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Tipo
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Permissão
                    </th>

                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Ações
                    </th>
                  </tr>
                </thead>

                <tbody class="bg-white divide-y divide-gray-200">
                  {usuarios.map((user) => (
                    <tr key={user}>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <div class="flex items-center">
                          <div class="flex-shrink-0 h-10 w-10">
                            <img
                              class="h-10 w-10 rounded-full"
                              src="do-utilizador.png"
                              alt=""
                            />
                          </div>
                          <div class="ml-4">
                            <div class="text-sm font-medium text-gray-900">
                              {user.nome} {user.sobrenome}
                            </div>
                            <div class="text-sm text-gray-500">
                              {user.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <div class="text-sm text-gray-900">{user.tipo} </div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <span
                          class={`${
                            user.ativo === true
                              ? "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                              : "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-red-800"
                          } `}
                        >
                          {`${user.ativo === true ? "Ativo" : "Inativo"}`}
                        </span>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gra'y-500">
                        {user.role}
                      </td>

                      <td class="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                     
                        <a href="#" class="text-cinza hover:text-gray-700" 
                       >
                          Alterar
                        </a>
                       
                        <a
                          href="#"
                          class="ml-2 text-secundaria hover:text-red-900"
                        >
                          Desativar
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div class="flex items-center justify-center pt-4 text-sm">
                <div class="mx-auto w-full max-w-[550px] bg-white">
                  <form>
                    <div class="mb-1 pt-3">
                      <label class="mb-1 block text-sm font-medium text-cinza ">
                        Nome e Sobrenome:
                      </label>
                      <div class="-mx-3 flex flex-wrap">
                        <div class="w-full px-3 sm:w-1/2">
                          <div class="mb-1">
                            <input
                              type="text"
                              name="nome"
                              required
                              id="nome"
                              placeholder="Nome"
                              class="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-sm font-light text-cinza outline-none focus:border-primaria focus:shadow-ms"
                              onChange={(e) => setNome(e.target.value)}
                           />
                          </div>
                        </div>
                        <div class="w-full px-3 sm:w-1/2">
                          <div class="mb-1">
                            <input
                              type="text"
                              name="sobrenome"
                              id="sobrenome"
                              required
                              placeholder="Sobrenome"
                              class="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-sm font-light text-cinza outline-none focus:border-primaria focus:shadow-ms"
                              onChange={(e) => setSobrenome(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="mb-1">
                      <label
                        for="email"
                        class="mb-1 block text-sm font-medium text-cinza"
                      >
                        E-mail
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        placeholder="Digite um e-mail Válido"
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-sm font-light text-cinza outline-none focus:border-primaria focus:shadow-sm"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                    <div class="mb-1 pt-1 ">
                      <label class="mb-1 block text-sm font-medium text-cinza ">
                        Login e Senha:
                      </label>
                      <div class="-mx-3 flex flex-wrap">
                        <div class="w-full px-3 sm:w-1/2">
                          <div class="mb-1">
                            <input
                              type="text"
                              name="login"
                              id="login"
                              required
                              placeholder="Login"
                              class="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-sm font-light text-cinza outline-none focus:border-primaria focus:shadow-ms"
                              onChange={(e) => setLogin(e.target.value)}
                            />
                          </div>
                        </div>
                        <div class="w-full px-3 sm:w-1/2">
                          <div class="mb-1">
                            <input
                              type="password"
                              name="senha"
                              id="senha"
                              required
                              placeholder="Senha"
                              class="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-sm font-light text-cinza outline-none focus:border-primaria focus:shadow-ms"
                              onChange={(e) => setSenha(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="w-full max-w-2xl mx-auto">
                      <label
                        class=" text-sm font-medium text-cinza"
                        required
                        for="searchIn"
                      >
                        Tipo
                      </label>

                      <div class="flex flex-auto justify-evenly border rounded-md w-full border-[#e0e0e0] dark:text-white">
                        {ArrayTipo.map((tip) => (
                          <div
                            key={tip}
                            class={`${
                              tipo === tip
                                ? "bg-primaria text-white px-2 py-1 rounded-md w-full cursor-pointer"
                                : "text-cinza font-light px-2 py-1 rounded-md w-full cursor-pointer"
                            }`}
                            onClick={() => handleTipo(tip)}
                          >
                            <input
                              type="radio"
                              class="hidden cursor-pointer"
                              required
                              id="tipoUser"
                            />
                            <label class="cursor-pointer" for="searchChapters">
                              {tip}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div class="pt-2 w-full max-w-2xl mx-auto">
                      <label
                        class=" text-sm font-medium text-cinza"
                        for="searchIn"
                      >
                        Role
                      </label>

                      <div class="flex flex-auto justify-evenly border rounded-md w-full border-[#e0e0e0] dark:text-white">
                        {ArrayRole.map((rol) => (
                          <div
                            key={rol}
                            class={`${
                              role === rol
                                ? "bg-primaria text-white px-2 py-1 rounded-md w-full cursor-pointer"
                                : "text-cinza font-light px-2 py-1 rounded-md w-full cursor-pointer"
                            }`}
                            onClick={() => handleRole(rol)}
                          >
                            <input
                              type="radio"
                              class="hidden cursor-pointer"
                              required
                              id="roleuser"
                            />
                            <label class="cursor-pointer" for="searchChapters">
                              {rol}
                            </label>
                          </div>
                        ))}
                      </div>
                     
                    </div>
                    <button class=" mt-2 hover:shadow-form w-full rounded-md bg-primaria py-2 px-8 text-center text-base font-semibold text-white outline-none" onClick={handleCadUser}>
                        Cadastrar
                      </button>
                  </form>
                 
                </div>
               
              </div>
              
            )}
            '
            <div class="mt-5 sm:mt-6">
              <button
                class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm"
                onClick={closeModal}
              >
                FECHAR
              </button>
            </div>
          </div>
        </div>
      </div>
      {popup &&  (
                        <Sucesso sucess={sucess} setPopup={setPopup} />
                      )}
    </>
  );
};

export default Admin;
