import React from "react";
import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { fetchUsuario } from "../../services/FetchUser";
import CadastrarProp from "../CadastrarProposta/CadastrarProp";
import Logout from "../../services/logout";
import { ListCategoria } from "../../services/ListCategoria";

const Aside = ({ setCatego }) => {
  
  const token = localStorage.getItem("TokenBaoOuNao");
  const usuarioDecodificado = jwtDecode(token);
  const [validaCad, setValidaCad] = useState(false);
  const [cad, setCad] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [categorias, setCategorias] = useState([]);
  const [updateTrigger, setUpdateTrigger] = useState(false);
  useEffect(() => {
    fetchUsuario(token, usuarioDecodificado.id);

    ListCategoria(setCategorias);
  }, []);
  useEffect(() => {
  // Sua lógica de reload aqui
}, [updateTrigger]);

  const handleCategoriaChange = (categoria) => {
    setCatego(categoria);
    setCad(categoria);
  };

  const ChamaFunction = () => {
    setUpdateTrigger(prevTrigger => !prevTrigger);
    setValidaCad(true);
  };

  return (
    <>
      <aside
        className="w-1/4 my-1 mr-1 px-6 py-4 flex flex-col bg-white
		 overflow-y-auto"
      >
        <div className="flex items-center justify-between">
          <a href="#" className="relative">
            <span>
              <svg
                className="h-5 w-5 hover:text-red-600 dark-hover:text-red-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokewidth="2"
                strokelinecap="round"
                strokelinejoin="round"
              >
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
            </span>

            <div className="absolute w-2 h-2 left-0 mb-6 ml-2 bottom-0">
              <span
                className="px-2 py-1 bg-secundaria rounded-full text-white
						text-xs"
              >
                !
              </span>
            </div>
          </a>

          <div className="flex items-center">
            <img
              className="h-10 w-10 rounded-full object-cover"
              src="do-utilizador.png"
              alt="Foto Perfil"
            />
            <div
              className="relative inline-block text-left"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              <button className="ml-1 focus:outline-none">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 192 512">
                  <path d="M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z"></path>
                </svg>
              </button>

              {isOpen && (
                <div
                  className="absolute right-0  w-48 bg-white border rounded-md shadow-lg"
                  onMouseEnter={() => setIsOpen(true)}
                  onMouseLeave={() => setIsOpen(false)}
                >
                  <a
                    href=""
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Editar Perfil
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={Logout}
                  >
                    Sair
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        <span className="mt-4 text-gray-600">
          <img src="logo-iftm.png" alt="LogoIftm" />
        </span>

        <button
          className="mt-4 flex items-center py-2 px-3 text-white rounded-lg
			bg-secundaria shadow focus:outline-none  hover:scale-100 hover:bg-primaria duration-300"
          onClick={() => ChamaFunction()}
        >
          <svg className="h-5 w-5 fill-current mr-2 ml-3" viewBox="0 0 24 24">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
          </svg>

          <span>Cadastrar Proposta</span>
        </button>

        {validaCad && (
          <CadastrarProp
            setValidaCad={setValidaCad}
            cad={cad}
          />
        )}
        <h1 className="text-xl mb-1 mt-2 border-slate-800  "> Categorias</h1>
        <ul className="flex flex-col">
          {categorias.map((categoria, index) => (
            <li key={index} className="mb-1">
              <input
                type="radio"
                id={categoria}
                name="Categoria"
                value={categoria}
                onChange={() => handleCategoriaChange(categoria)}
                className="hidden peer"
                required
              />
              <label
                htmlFor={categoria}
                className="inline-flex items-center justify-between py-2 px-3 w-full text-white
                  bg-white border rounded-lg cursor-pointer dark:hover:text-white
                  dark:peer-checked:text-white peer-checked:border-white peer-checked:bg-primaria
                  peer-checked:text-white hover:text-white hover:bg-gray-100 dark:text-white 
                  dark:bg-cinza dark:hover:bg-primaria"
              >
                <div className="block">
                  <div className="w-full">{categoria}</div>
                </div>
                <svg
                  className="w-5 h-5 ms-3 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </label>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Aside;
