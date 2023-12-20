import React from "react";
import Aside from "../aside/aside";
import { useState, useEffect } from "react";
import { fetchUsuario } from "../../services/FetchUser";
import { jwtDecode } from "jwt-decode";
import { listCat } from "../../services/CatHome";
import { ListCategoria } from "../../services/ListCategoria";
import { ListQuantidadeCurtidas } from "../../services/QuantidadeCurtida";
import { curtida } from "../../services/Curtida";
import { descurtida } from "../../services/descurtir";
import ErrCurtida from "../Erros/ErrCurtida";
import { CurtiuOuNao } from "../../services/CurtiuOuNao";
import NavAdmin from "../Nav/NavAdmin";


const  CardMainAdmin = () => {
  const [usuario, setUsuario] = useState('');
  const [catego, setCatego] = useState(null);
  const [propostas, setPropostas] = useState(null);
  const [curtidas, setCurtidas] = useState(null);
  const [ErrorCurtida, setErrorCurtida] = useState(false);
  const [error, setError] = useState('');
  const token = localStorage.getItem("TokenBaoOuNao");
  const usuarioDecodificado = jwtDecode(token);
  const idUsuario =  usuarioDecodificado.id;
  const [verificacoes, setVerificacoes] = useState({});
  const [updateTrigger, setUpdateTrigger] = useState(false);

  useEffect(() => {
    const fetchVerificacoes = async () => {
      if (propostas) {
       
        const verificacoesPromises = propostas.map(async (proposta) => {
          let idpropi = proposta.id
          const verificaimagem = await CurtiuOuNao(idUsuario,idpropi);
          
          return { id: idpropi, verificaimagem };
        });

        const resultadosVerificacoes = await Promise.all(verificacoesPromises);

        const mapaVerificacoes = {};
        resultadosVerificacoes.forEach(({ id, verificaimagem }) => {
          mapaVerificacoes[id] = verificaimagem;
        });
        setVerificacoes(mapaVerificacoes);
      }
    };

    fetchVerificacoes();
  }, [propostas,updateTrigger]);


  useEffect(() => {
    fetchUsuario(token, idUsuario, setUsuario);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    listCat(token, async (propostas) => {
      setPropostas(propostas);
    });
    ListCategoria(setCatego);
  }, []);

  
  
  useEffect(() => {
    
	const fetchCurtidasParaPropostas = async () => {
	  if (propostas) {
		const curtidasPromises = propostas.map(async (proposta) => {
		  const curtidas = await ListQuantidadeCurtidas(proposta.id);
		  return { id: proposta.id, curtidas };
		});

    
    
  
		const resultadosCurtidas = await Promise.all(curtidasPromises);
  
		const mapaCurtidas = {};
		resultadosCurtidas.forEach(({ id, curtidas }) => {
		  mapaCurtidas[id] = curtidas;
		});
		setCurtidas(mapaCurtidas);
	  }
	};

  
	fetchCurtidasParaPropostas();
  }, [propostas, idUsuario, updateTrigger]);



 
  let Verifica;

    
 
const handleToggleCurtida = async (idUsuario, proposta) => {

   let idProposta = proposta.id
  
     Verifica= await CurtiuOuNao(idUsuario, idProposta ) 
 
 

 
   
    try {  
      

    if (Verifica===true) {
      // Se já curtiu, faz descurtida
      const result = await descurtida(idProposta);
      if (result.sucesso) {
        const novaCurtida = { ...curtidas };
        novaCurtida[proposta.id] -= 1;
        setCurtidas(novaCurtida);
  
        console.error("Erro ao descurtir:", result.error);
      }
    } else {
      // Se ainda não curtiu, faz curtida
      const result = await curtida( idProposta);
      if (result.sucesso) {
        const novaCurtida = { ...curtidas };
        novaCurtida[proposta.id] = novaCurtida[proposta.id] ? novaCurtida[proposta.id] + 1 : 1;
        setCurtidas(novaCurtida);

      } else {
        setErrorCurtida(true);
        setError(result.erro);
      }
    }
    setUpdateTrigger(prevTrigger => !prevTrigger);
  } catch (error) {
    console.error("Erro ao lidar com a toggle de curtida:", error);
  }
};


useEffect(() => {

}, [propostas]);
  
  return (
    <>
      <div className="h-screen w-full flex overflow-hidden select-none">
        <NavAdmin/>
        <main
          className="my-1 pt-2 pb-2 px-10 flex-1 bg-white
		transition duration-500 ease-in-out overflow-y-auto"
        >
          <div className="flex flex-col capitalize text-3xl px-3">
            <span className="font-semibold">Bem Vindo, <span className="font-light">{usuario.nome} </span>
           
            </span>
          
            
          </div>
          <div className="flex">
            <div
              className="mr-6 w-11/12 mt-8 py-2 flex-shrink-0  flex flex-col bg-white
			"
            >
        {   //   <h3
            //    className="flex items-center pt-1 pb-1 px-8 text-lg font-semibold
				//	capitalize dark:text-gray-300"
         //     ></h3>  -->
        }

              <div>
               
                {catego ? (
                  <ul className="pt-1 pb-2 px-3 overflow-y-auto">
                    <h1>Propostas publicadas</h1>

                    {propostas &&
                      propostas
                        .filter(
                          (proposta) =>
                            proposta.categoria === catego &&
                            proposta.situacao === "APROVADA"
                        )
                        .sort(
                          (propostaA, propostaB) =>
                            curtidas[propostaB.id] - curtidas[propostaA.id]
                        ) // Ordena por quantidade de curtidas
                        
                        .map((proposta, index) => (
 
                         
                          <li key={index} className="mt-2">
                            <span
                              className="p-5 flex flex-col justify-between bg-gray-100 dark:bg-gray-100 rounded-lg cursor-pointer"
                           
                            >
                              <div className="flex items-center justify-between font-semibold capitalize dark:text-gray-900">
                                <span>{proposta.titulo}</span>

                                <div className="flex items-center bg-primaria rounded-3xl py px-1">
                                  <img
                                    className="w-4 mr-2 my-1 "
                                    src="gostar.png"
                                    alt="IconeSuperior"
                                  />
                                  <span className="mr-1 text-white">
                                    {" "}
                                    {curtidas[proposta.id] }
                                  </span>
                                </div>
                              </div>

                              <p className="text-sm font-medium leading-snug text-gray-600 my-3">
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
                               
                                <img
                              
                                  className="w-6"
                               
                                  src={
                                //    verificacoes[proposta.id]
                                   // verificacoes[proposta.id]
                                  verificacoes[proposta.id] ===true
                                      ? "polegar-para-cima.png"
                                      : "polegar-para-cima_False.png"
                                  }
                                 
                                  alt=""
                                
                                  onClick={() =>
                                    handleToggleCurtida(
                                      usuario.id,
                                      proposta
                                    )

                                   
                                  }
                                />
                                 
                              </div>
                            </span>
                          </li>
                        ))}
                  </ul>
                ) : (
                  <h1 className="text-gray-800">
                    Não existem propostas ou não foi selecionada a categoria.
                  </h1>
                )}
              </div>
            </div>
          </div>
        </main>
        {ErrorCurtida  && (
                        <ErrCurtida error={error} setErrorCurtida={setErrorCurtida} />
                      )}
        <Aside setCatego={setCatego} />
        {console.log(catego)}
      </div>
    </>
  );
};

export default CardMainAdmin;
