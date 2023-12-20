import React from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";
import { handleSubmitProposta } from "../../services/CadProposta";
import LoginErr from "../Erros/LoginErr";
import Sucesso from "../exception/sucesso";
import { ListCategoria } from "../../services/ListCategoria";
import CategoriaError from "../Erros/CategoriaError";
import { jwtDecode } from "jwt-decode";

const CadastrarProp = ({ setValidaCad }) => {

  const [isChecked, setIsChecked] = useState(false);
  const [descricao, setDescricao] = useState("");
  const [titulo, setTitulo] = useState("");
  const [validaPop, setValidaPop] = useState(false);
  const [error, setError] = useState(null);
  const [sucess, setSucess] = useState(null);
  const [popup, setPopup] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [categoria, setCategoria] = useState(null);
  const [categorias, setCategorias] = useState([]);
  const [formEnviado, setFormEnviado] = useState(false);
  const feedback = "";
  const situacao = "ANALISE";
  const qtdLikes = 0;

 

  function closeModal() {
    document.getElementById("my-modalCadPropPrincipal").classList.add("hidden");
    setValidaCad(false);
    window.location.reload();
  }
  const handleCheckboxChange = () => {
    // Atualiza o estado do checkbox para o oposto do estado atual
    setIsChecked(!isChecked);
  };
  const token = localStorage.getItem('TokenBaoOuNao');
  const usuarioDecodificado = jwtDecode(token)
  const id = usuarioDecodificado.id;

  
  const handleCadPropostaSubmit = async (e) => {
    e.preventDefault();
    setFormEnviado(true);
    const { sucesso, erro } = await handleSubmitProposta(
      titulo,
      descricao,
      categoria,
      qtdLikes,
      id,
      situacao,
      feedback
    );

    if (sucesso) {
      setSucess("Proposta Cadastrada com sucesso!");
      setPopup(true)
    }
    if (categoria === null) {
      setError("Selecione uma Categoria antes de prosseguir");
      setValidaPop(true);
    }
  };

  const handleCategoria = async (categoria) => {
    
    setCategoria(categoria);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    ListCategoria(setCategorias);
  
  }, []);

  return (
    <>
      <div class="fixed z-10 inset-0 overflow-y-auto " id="my-modalCadPropPrincipal">
        <div class="flex items-end justify-center  min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div class="fixed inset-0 transition-opacity" aria-hidden="true">
            <div class="absolute inset-0 bg-gray-200 opacity-75"></div>
          </div>
          <span
            class="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <div
            class="inline-block align-bottom 
            
            bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-2/3"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div>
              <div class=" text-center sm:mt-5">
                <div class="">
                  <form onSubmit={handleCadPropostaSubmit}>
                    <div className="space-y-5">
                      <div className="border-b border-gray-900/10 pb-12">
                        <div className=" flex items-center gap-x-3">
                          
                          <label class="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              value=""
                              class="sr-only peer"
                              checked={isChecked}
                              onChange={handleCheckboxChange}
                            />
                            <div
                              class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-white
                        dark:peer-focus:ring dark:bg-cinza peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full
                         peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white
                        after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-primaria
                     peer-checked:bg-primaria"
                            ></div>
                            <span class="ms-3 text-base  font-light text-cinza ">
                              Anônimo
                            </span>
                          </label>
                        </div>
                        <h2 className="text-2xl font-normal leading-7 text-cinza ">
                          Cadastrar Proposta
                        </h2>

                        <div className="sm:col-span-3 mt-5">
                          <label
                            htmlFor="first-name"
                            className="block text-xl font-extralight leading-6 text-cinza"
                          >
                            Título
                          </label>
                          <div className="mt-2">
                            <input
                              type="text"
                              name="first-name"
                              id="first-name"
                              required
                              autoComplete="given-name"
                              className="block w-full border rounded-md border-[#e0e0e0] bg-white py-2 px-6 text-sm font-light text-cinza outline-none focus:border-primaria focus:shadow-sm"
                              onChange={(e) => setTitulo(e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                          <div className="col-span-full">
                            <label
                              htmlFor="about"
                              className="block text-xl font-extralight leading-6 text-cinza"
                            >
                              Descrição
                            </label>
                            <div className="mt-2">
                              <textarea
                                id="about"
                                name="about"
                                placeholder="Registre sua proposta em até 250 caracteres. Após o cadastro, nossos moderadores avaliarão e aprovarão, garantindo a qualidade e relevância das propostas."
                                required
                                rows={3}
                                className="block w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-sm font-light text-cinza outline-none focus:border-primaria focus:shadow-sm"
                                defaultValue={""}
                                onChange={(e) => setDescricao(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-3 mt-3 flex-wrap justify-center text-xs">
                          {categorias.map((cat) => (
                            <div key={cat} className="">
                              <span
                                className={`${
                                  categoria === cat
                                    ? "bg-primaria rounded-xl px-2 py-2 font-semibold text-white  inline-block  hover:bg-opacity-95 hover:no-underline"
                                    : "bg-cinza px-2 py-2 font-light text-white text-center my-1 inline-block w-32 rounded-xl  hover:bg-opacity-95 hover:no-underline hover:text-white hover:bg-primaria"
                                } sm:w-32 cursor-pointer`}
                                onClick={() => handleCategoria(cat)}
                              >
                                {cat}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div class="mt-1 flex">
                      <button
                        class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2
                 bg-cinza text-base font-medium text-white hover:bg-slate-500 focus:outline-none focus:ring-2 
                 focus:ring-offset-2 focus:ring-slate-500 sm:text-sm"
                        onClick={closeModal}
                      >
                        Fechar
                      </button>
                      <button
                        class=" ml-2 inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2
                 bg-primaria hover:bg-green-800 text-base font-medium text-white 
                 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-sm"
                        type="submit"
                      >
                        Cadastrar Proposta
                      </button>
                      
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {validaPop && categoria !== null && (
                        <LoginErr error={error} setValidaPop={setValidaPop} />
                      )}

                      {validaPop &&
                        categoria === null &&
                        formEnviado === true && (
                          <CategoriaError
                            error={error}
                            setValidaPop={setValidaPop}
                          />
                        )}

                      {popup && categoria !== null && (
                        <Sucesso sucess={sucess} setPopup={setPopup} />
                      )}
    </>
  );
};

export default CadastrarProp;
