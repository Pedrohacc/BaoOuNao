import React from "react";

function CardMain() {
  return (
    <>
      <div className="min-h-screen flex flex-col sm:flex-col  md:flex-row   mt-4 h-52">
        <div className="flex-none w-32"></div>
        <div className="overflow-auto flex-1  justify-center ">
          <div className="overflow-auto mx-auto bg-white shadow-md rounded-lg w-auto h-3/5 mr-8 md:flex-col">
            <img
              className="float-right w-4 h-auto mr-2 mt-2"
              src="bubble-chat.png"
              alt=""
            />
            <span className="float-left text-cinza opacity-60 font-extralight ml-2 mt-2 text-xs">
              Propostas publicadas
            </span>
            <figure className=" mt-10 md:flex  p-0 md:p-0">
              <img
                className="ml-1 w-14 h-14 rounded-full mx-auto relative"
                src="jamelão.png"
                alt=""
                width="384"
                height="512"
              />

              <div class="pt-4 mr-20 md:p-4 text-right md:text-left space-y-4">
                <figcaption className="font-me opacity-75 font-bold text-center">
                  <div
                    className="rounded-full float-right text-black opacity-100 
                border-primaria-2 shadow-md flex px-4 border-2 border-green-700  "
                  >
                    <img
                      className="opacity-100 w-6 h-6 pr-1"
                      src="polegar-para-cima.png"
                      alt="Joia"
                    />
                    30
                  </div>
                  <div className="text-black text-left">
                    Lucas Rocha Andrade
                  </div>
                </figcaption>
                <blockquote>
                  <p className="text-sm font-sans pr-28 ">
                    Quero que o preço do café da cantina seja mais justo! da
                    cantina seja mais justo!
                  </p>
                </blockquote>
                <button className="float-left w-7 relative">
                  <img src="polegar-para-cima.png" alt="Joia" />
                </button>
                <span className="float-right pt-2 text-cinza  font-extralight text-sm">
                  2 semanas atrás
                </span>
              </div>
            </figure>
            <figure className=" mt-10 md:flex  p-0 md:p-0">
              <img
                className="ml-1 w-14 h-14 rounded-full mx-auto relative"
                src="Saulo.png"
                alt=""
                width="384"
                height="512"
              />

              <div class="pt-4 mr-20 md:p-4 text-right md:text-left space-y-4">
                <figcaption className="font-me opacity-75 font-bold text-center">
                  <div
                    className="rounded-full float-right text-black opacity-100 
                border-primaria-2 shadow-md flex px-4 border-2 border-green-700  "
                  >
                    <img
                      className="opacity-100 w-6 h-6 pr-1"
                      src="polegar-para-cima.png"
                      alt="Joia"
                    />
                    23
                  </div>
                  <div className="text-black text-left">Saulo</div>
                </figcaption>
                <blockquote>
                  <p className="text-sm font-sans pr-28 ">
                    Gostaria que a cantina vendesse refrigerante.
                  </p>
                </blockquote>
                <button className="float-left w-7 relative opacity-60">
                  <img src="polegar-para-cima_False.png" alt="Joia" />
                </button>
                <span className="float-right pt-2 text-cinza  font-extralight text-sm">
                  1 semanas atrás
                </span>
              </div>
            </figure>
            <figure className=" mt-10 md:flex  p-0 md:p-0">
              <img
                className=" ml-1 w-14 h-14 rounded-full mx-auto relative"
                src="Josimar.png"
                alt=""
                width="384"
                height="512"
              />

              <div class="pt-4 mr-20 md:p-4 text-right md:text-left space-y-4">
                <figcaption className="font-me opacity-75 font-bold text-center">
                  <div
                    className="rounded-full float-right text-black opacity-100 
                border-primaria-2 shadow-md flex px-4 border-2 border-green-700  "
                  >
                    <img
                      className="opacity-100 w-6 h-6 pr-1"
                      src="polegar-para-cima.png"
                      alt="Joia"
                    />
                    21
                  </div>
                  <div className="text-black text-left">Josimar Viana</div>
                </figcaption>
                <blockquote>
                  <p className="text-sm font-sans pr-28 ">
                    Gostaria que fossem feitas melhorias nas cadeiras
                    disponíveis na cantina.
                  </p>
                </blockquote>
                <button className="float-left w-7 relative opacity-60">
                  <img src="polegar-para-cima_False.png" alt="Joia" />
                </button>
                <span className="float-right pt-2 text-cinza  font-extralight text-sm">
                  5 dias atrás
                </span>
              </div>
            </figure>

            <figure className=" mt-10 md:flex  p-0 md:p-0">
              <img
                className="ml-1 w-14 h-14 rounded-full mx-auto relative"
                src="preto.jpg"
                alt=""
                width="384"
                height="512"
              />

              <div class="pt-4 mr-20 md:p-4 text-right md:text-left space-y-4">
                <figcaption className="font-me opacity-75 font-bold text-center">
                  <div
                    className="rounded-full float-right text-black opacity-100 
                border-primaria-2 shadow-md flex px-4 border-2 border-green-700  "
                  >
                    <img
                      className="opacity-100 w-6 h-6 pr-1"
                      src="polegar-para-cima.png"
                      alt="Joia"
                    />
                    15
                  </div>
                  <div className="text-black text-left">Anônimo</div>
                </figcaption>
                <blockquote>
                  <p className="text-sm font-sans pr-28 ">
                    Gostaria que os cachorros não fossem alimentados dentro da
                    cantina.
                  </p>
                </blockquote>
                <button className="float-left w-7 relative opacity-60">
                  <img src="polegar-para-cima_False.png" alt="Joia" />
                </button>
                <span className="float-right pt-2 text-cinza  font-extralight text-sm">
                  4 dias atrás
                </span>
              </div>
            </figure>
            <button className="float-right w-10 h-10 mr-2 mb-1 hover:scale-110 hover:shadow-sm duration-100"> <img  src="flecha.png" alt="" /></button>
          </div>
        </div>
        <div className="overflow-auto flex-1  MobileHome:mx-auto">
          <div className="overflow-auto  bg-white shadow-md rounded-lg w-3/4 h-3/5 max-w-xxl w-3/4">
            <img
              className="float-right w-4 h-auto mr-2 mt-2"
              src="linhas-de-opcoes.png"
              alt=""
            />
            <span className="float-left text-cinza opacity-60 font-extralight ml-2 mt-2 text-xs">
              Categorias
            </span>

            <div className=" bg-cinza bg rounded-md mx-auto w-80 h-8 mt-8  MobileHome:w-auto MobileHome:mx-10">
              <input
                id="radio1"
                type="radio"
                value=""
                name="colored-radio"
                className="mt-2 mr-2 float-right w-4 h-4 "
              />
              <div className="text-left pl-3 font-normal text-white">
                Sala de Aula
              </div>
            </div>
            <div className=" bg-primaria bg rounded-md mx-auto w-80 h-8 mt-3  MobileHome:w-auto MobileHome:mx-10">
              <input
                checked
                id="radio2"
                type="radio"
                value=""
                name="colored-radio"
                className="mt-2 mr-2 float-right w-4 h-4 "
              />
              <div className="text-left pl-3 font-normal text-white">
                Refeitório
              </div>
            </div>
            <div className=" bg-cinza bg rounded-md mx-auto w-80 h-8 mt-3 MobileHome:w-auto MobileHome:mx-10">
              <input
                id="radio3"
                type="radio"
                value=""
                name="colored-radio"
                className="mt-2 mr-2 float-right w-4 h-4 "
              />
              <div className="text-left pl-3 font-normal text-white">
                Infraestrutura
              </div>
            </div>
            <div className=" bg-cinza bg rounded-md mx-auto w-80 h-8 mt-3 MobileHome:w-auto MobileHome:mx-10">
              <input
                id="radio4"
                type="radio"
                value=""
                name="colored-radio"
                className=" mt-2 mr-2 float-right w-4 h-4 "
              />
              <div className="text-left pl-3 font-normal text-white">
                Site institucional
              </div>
            </div>
            <div className=" bg-cinza bg rounded-md mx-auto w-80 h-8 mt-3 MobileHome:w-auto MobileHome:mx-10">
              <input
                id="radio6"
                type="radio"
                value=""
                name="colored-radio"
                className=" mt-2 mr-2 float-right w-4 h-4 "
              />
              <div className="text-left pl-3 font-normal text-white">
                Transporte
              </div>
            </div>
            <div className=" bg-cinza bg rounded-md mx-auto w-80 h-8 mt-3 MobileHome:w-auto MobileHome:mx-10">
              <input
                id="radio6"
                type="radio"
                value=""
                name="colored-radio"
                className=" mt-2 mr-2 float-right w-4 h-4 "
              />
              <div className="text-left pl-3 font-normal text-white">
                Professores
              </div>
            </div>
            <div className=" bg-cinza bg rounded-md mx-auto w-80 h-8 mt-3 MobileHome:w-auto MobileHome:mx-10">
              <input
                id="radio7"
                type="radio"
                value=""
                name="colored-radio"
                className=" mt-2 mr-2 float-right w-4 h-4 "
              />
              <div className="text-left pl-3 font-normal text-white">
                Disciplinas
              </div>
            </div>
          </div>
          
        </div>
      </div>
    
    </>
  );
}

export default CardMain;
