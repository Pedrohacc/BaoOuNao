import React, { useEffect, useState } from 'react';
import { listCat } from '../../services/CatHome';
import { jwtDecode } from "jwt-decode";



const MinhasPropostas = ({setValidaCadMinhaPropostas}) => {
  const [propostas, setPropostas] = useState([]);
  const token = localStorage.getItem('TokenBaoOuNao');
  const usuarioDecodificado = jwtDecode(token);


  function closeModal() {
    setValidaCadMinhaPropostas(false);
    document.getElementById("my-modalMinhasPropostas").classList.add("hidden");
    window.location.reload();
  }
  
  useEffect(() => {
    const fetchPropostasDoUsuario = async () => {
      try {
        await listCat(token, setPropostas);
      } catch (error) {
        console.error('Erro ao obter propostas do usuário:', error);
      }
    };

    fetchPropostasDoUsuario();
  }, []);
  return (
    <>
      <div class="fixed z-10 inset-0 overflow-y-auto" id="my-modalMinhasPropostas">
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
              Minhas Propostas
            </h2>

            <div>
              {propostas !== null ? (
                <ul className="pt-1 pb-2 px-3 overflow-y-auto ">
                

                  {propostas &&
                    propostas
                    .filter((proposta) => proposta.usuario.id === usuarioDecodificado.id)
                     .map((proposta, index) => (
                        <li key={index} className="mt-2">
                          <span className="p-5 flex flex-col justify-between bg-gray-100 dark:bg-gray-100 rounded-lg cursor-pointer">
                            
                              <div class=" rounded-sm relative">
                                <div class="text-left">
                                  {proposta.situacao === "ANALISE" && (
                                    <span class=" absolute top-0 right-0 inline-block rounded-full text-white bg-yellow-500 px-2 py-1 text-xs font-bold mr-3 cursor-pointer">
                                      Em análise
                                    </span>
                                  )}
                                  {proposta.situacao === "RECUSADA" && (
                                    <span class=" absolute top-0 right-0 inline-block rounded-full text-white bg-secundaria px-2 py-1 text-xs font-bold mr-3 cursor-pointer">
                                      Recusada
                                    </span>
                                  )}
                                  {proposta.situacao === "APROVADA" && (
                                    <span class=" absolute top-0 right-0 inline-block rounded-full text-white bg-primaria px-2 py-1 text-xs font-bold mr-3 cursor-pointer">
                                      Aprovada
                                    </span>
                                  )}
                                  {proposta.situacao === "A_REFAZER" && (
                                    <span class=" absolute top-0 right-0 inline-block rounded-full text-white bg-black px-2 py-1 text-xs font-bold mr-3 cursor-pointer">
                                      A refazer
                                    </span>
                                  )}
                                </div>
                              </div>
                            

                            <span className='font-semibold text-cinza'>{proposta.titulo}</span>
                            <p className="text-xs font-normal leading-snug text-gray-600 my-3">
                              {proposta.descricao}
                            </p>

                            
                            
                            <div class="relative mt-3">
                              {proposta.feedback !=="" &&(
                              <label className=" float-right text-xs">
                                <strong>  Feedback:  </strong>{proposta.feedback}
                              
                              </label>
                              )}
                            </div>
                          </span>
                          
                        </li>
                      ))}
                </ul>
              ) : (
                <h1 className="text-cinza text-center text-xs">
                  Você não cadastrou nenhuma proposta!
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

export default MinhasPropostas;
