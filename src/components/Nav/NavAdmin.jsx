import React from "react";
import { jwtDecode } from "jwt-decode";
import { useState, useEffect } from "react";
import { fetchUsuario } from "../../services/FetchUser";
import Moderar from "../Moderar/Moderar";
import MinhasPropostas from "../MinhasPropostas/MinhasPropostas";
import Admin from "../Admin/Admin";
const NavAdmin = () => {
  const [usuario, setUsuario] = useState("");
  const token = localStorage.getItem("TokenBaoOuNao");
  const usuarioDecodificado = jwtDecode(token);
  const [validaCadModerator, setValidaCadModerator] = useState(false);
  const [validaCadMinhaPropostas, setValidaCadMinhaPropostas] = useState();
  const [ValidaAdmin, setValidaAdmin] = useState();

  useEffect(() => {
    fetchUsuario(token, usuarioDecodificado.id, setUsuario);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSelecao = () => {
    setValidaCadModerator(true);
  };
  const handleSelecaoPropostas = () => {
    setValidaCadMinhaPropostas(true);
  };

  const handleAdmin =() =>{
    setValidaAdmin(true)
  }
  return (
    <>
      <nav className="w-24 flex flex-col items-center bg-primaria">
        <ul className="mt-2 text-white  capitalize cursor-pointer">
          <li className="mt-3 p-2 text-white  hover:text-cinza rounded-lg ">
            <a href="/homeAdmin" className=" flex flex-col items-center">
              <svg className="fill-current h-5 w-5" viewBox="0 0 24 24">
                <path
                  d="M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9
							17v2H5v-2h4M21 3h-8v6h8V3M11 3H3v10h8V3m10
							8h-8v10h8V11m-10 4H3v6h8v-6z"
                ></path>
              </svg>
              <span className="text-xs mt-2">dashBoard</span>
            </a>
          </li>

          <li
            className="mt-3 p-2 hover:text-cinza
				rounded-lg"
          >
            <div
              className=" flex flex-col items-center"
              onClick={handleSelecaoPropostas}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                />
              </svg>
              <span className="text-xs mt-2 text-center">Minhas propostas</span>
            </div>
          </li>

          <li
            className="mt-3 p-2 hover:text-cinza
				rounded-lg"
          >
            <div
              className=" flex flex-col items-center"
              onClick={handleSelecao}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
                />
              </svg>

              <span className="text-xs mt-2 text-center">Moderar</span>
            </div>
          </li>
          <li
            className="mt-3 p-2 hover:text-cinza
				rounded-lg"
          >
            <div className=" flex flex-col items-center"
            onClick={handleAdmin}
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
              <span className="text-xs mt-2 text-center">Administrar</span>
            </div>
          </li>
        </ul>
        {validaCadModerator && (
          <Moderar setValidaCadModerator={setValidaCadModerator} />
        )}
        {validaCadMinhaPropostas && (
          <MinhasPropostas
            setValidaCadMinhaPropostas={setValidaCadMinhaPropostas}
          />
        )}
        {ValidaAdmin && (
          <Admin
            setValidaAdmin={setValidaAdmin}
          />
        )}
        
      </nav>
    </>
  );
};

export default NavAdmin;
