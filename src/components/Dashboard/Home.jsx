import React from "react";
import Nav from "../Nav/Nav";
import CardSuperior from "../CardSuperior/CardSuperior";
import CardMain from "../CardMain/CardMain";
import { useLocation} from "react-router-dom";
import { useEffect, useState } from "react";

const Home = () => {
  const { state } = useLocation();
  const [usuarioDecodificado, setUsuarioDecodificado] = useState(state?.usuarioDecodificado);

  console.log('',usuarioDecodificado);

  useEffect(() => {
    // Atualiza o estado local se o objeto for alterado
    setUsuarioDecodificado(state?.usuarioDecodificado);
  }, [state?.usuarioDecodificado]);
  return (
  < div className="bg-fundo">
  <Nav/>
  <CardSuperior/>
  <CardMain/>
  </ div>
  );
};

export default Home;
