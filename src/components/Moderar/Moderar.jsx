import React from "react";
import { useState, useEffect } from "react";
import { listCat } from "../../services/CatHome";
import { ModerarProp } from "../../services/ModerarProp";
const Moderar = ({ setValidaCadModerator }) => {
  const [propostas, setPropostas] = useState(null);
  const [situacao, setSitucao] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [alterar, setAlterar] = useState(false);
  const [propostaSelecionada, setPropostaSelecionada] = useState(null);
  const token = localStorage.getItem("TokenBaoOuNao");

  useEffect(() => {
    listCat(token, async (propostas) => {
      setPropostas(propostas);
    });
  }, [alterar]);

  function closeModal() {
    setValidaCadModerator(false);
    document.getElementById("my-modalModerar").classList.add("hidden");
    window.location.reload();
  }

  function editar(proposta) {
    if (situacao !== null  ){
     ModerarProp(proposta,situacao, feedback,setAlterar);
    }

  }

  function esperaEditar(proposta) {
    setPropostaSelecionada(proposta);
  }

  return (
    <>
      <div class="fixed z-10 inset-0 overflow-y-auto" id="my-modalModerar">
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
              Painel do Moderador
            </h2>

            <div>
              {propostas !== null ? (
                <ul className="pt-1 pb-2 px-3 overflow-y-auto ">
                  <h1 className="text-cinza text-sm text-center">
                    Propostas para Aprovação
                  </h1>

                  {propostas &&
                    propostas
                      .filter((proposta) => proposta.situacao === "ANALISE")

                      .map((proposta, index) => (
                        <li key={index} className="mt-2">
                          <span className="p-5 flex flex-col justify-between bg-gray-100 dark:bg-gray-100 rounded-lg cursor-pointer">
                            {alterar === true &&
                            proposta.id === propostaSelecionada.id ? (
                              <div className="rounded-sm relative">
                                <div className="text-left">
                                  <select
                                  placeholder="situação"
                                    value={situacao}
                                    onChange={(e) => setSitucao(e.target.value)}
                                    className=" absolute top-0 right-0 rounded-full bg-gray-300 px-2 py-1 text-xs font-bold mr-3 cursor-pointer"
                                  >
                                    <option value={null}>Situação</option>
                                    <option value="RECUSADA">Recusada</option>
                                    <option value="APROVADA">Aprovada</option>
                                    <option value="A_REFAZER">A refazer</option>
                                  </select>
                                </div>
                              </div>
                            ) : (
                              <div class=" rounded-sm relative">
                                <div class="text-left">
                                  {proposta.situacao === "ANALISE" && (
                                    <div class="flex justify-end">
                                    <span class="inline-block border rounded-xl  bg-yellow-100 text-yellow-500 border-yellow-500 px-2 py-1 text-xs font-semibold mr-3 cursor-pointer">
                                      <span class="capitalize">
                                        {proposta.categoria}
                                      </span>
                                    </span>

                                    <span class="inline-block rounded-full text-white bg-yellow-500 px-2 py-1 text-xs font-bold mr-3 cursor-pointer">
                                      Em análise
                                    </span>
                                  </div>
                                  )}
                                  {proposta.situacao === "RECUSADA" && (
                                    <span class=" absolute top-0 right-0 inline-block rounded-full text-white bg-secundaria px-2 py-1 text-xs font-bold mr-3 cursor-pointer">
                                      Em análise
                                    </span>
                                  )}
                                  {proposta.situacao === "APROVADA" && (
                                    <span class=" absolute top-0 right-0 inline-block rounded-full text-white bg-primaria px-2 py-1 text-xs font-bold mr-3 cursor-pointer">
                                      Em análise
                                    </span>
                                  )}
                                  {proposta.situacao === "A_REFAZER" && (
                                    <span class=" absolute top-0 right-0 inline-block rounded-full text-white bg-black px-2 py-1 text-xs font-bold mr-3 cursor-pointer">
                                      Em análise
                                    </span>
                                  )}
                                </div>
                              </div>
                            )}

                            <span>{proposta.titulo}</span>
                            <p className="text-xs  font-normal leading-snug text-gray-600 my-3">
                              {proposta.descricao}
                            </p>

                            <div className="flex justify-between">
                              <div className="flex">
                                <img
                                  className="h-6 w-6 rounded-full mr-3"
                                  src="do-utilizador.png"
                                  alt="Issue"
                                />
                                <span>
                                  <span className="text-gray-900 font-semibold">
                                    {proposta.anonimo
                                      ? "Anônimo"
                                      : proposta.usuario.nome}
                                  </span>
                                </span>
                              </div>
                            </div>
                            <div class="relative">
                              {alterar === true &&
                              proposta.id === propostaSelecionada.id ? (
                                <div>
                                  <button
                                    class=" absolute bottom-0 right-0 text-cinza hover:text-primaria
                            text-sm rounded-l-lg font-normal px-4 py-2 inline-flex space-x-1 items-center"
                                    onClick={() => {
                                      editar(proposta, situacao,feedback);
                                    }}
                                  >
                                    <span className="">
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
                                          d="M4.5 12.75l6 6 9-13.5"
                                        />
                                      </svg>
                                    </span>
                                    <span class="font-semibold">Salvar Alteraração</span>
                                  </button>
                                  <div className="sm:col-span-3 mt-5">
                                    <div className="mt-2">
                                      <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        placeholder="Feedback"
                                        
                                        autoComplete="given-name"
                                        className="pl-2 block w-3/4 rounded-md  border-[#e0e0e0] bg-white py-2 px-6 text-sm font-light text-cinza outline-none focus:border-primaria focus:shadow-sm"
                                        onChange={(e) =>
                                          setFeedback(e.target.value)
                                        }
                                      />
                                    </div>
                                  </div>
                                </div>
                              ) : (
                                <button
                                  class=" absolute bottom-0 right-0 text-cinza hover:text-slate-800 
                            text-sm rounded-l-lg font-normal px-4 py-2 inline-flex space-x-1 items-center"
                                  onClick={() => {
                                    setAlterar(true);
                                    esperaEditar(proposta);
                                  }}
                                >
                                  <span className="">
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
                                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                      />
                                    </svg>
                                  </span>
                                  <span class="">Editar</span>
                                </button>
                              )}
                            </div>
                          </span>
                        </li>
                      ))}
                </ul>
              ) : (
                <h1 className="text-cinza text-center text-xs">
                  Não existem propostas.
                </h1>
              )}
            </div>

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
    </>
  );
};

export default Moderar;
