import styled, { createGlobalStyle } from "styled-components";
import TelaLogin from "./components/TelaLogin/TelaLogin";
import TelaCadastro from "./components/TelaCadastro/TelaCadastro";
import TelaUsuarioCadastrado from "./components/TelaUsuarioCadastrado/TelaUsuarioCadastrado.js";
import { useState } from "react";

const GlobalStyled = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`
const MainContainer = styled.main`
  height: 100vh;
`

function App() {
const [tela, setTela] = useState(1)
const mudarTela = () => {
  setTela(2)
}
switch(tela){
  case 1:
    return (  
    <MainContainer >
      <GlobalStyled />
      <TelaLogin mudarTela={mudarTela}/>
    </MainContainer>
    )

case 2:
  return (  <MainContainer >
    <GlobalStyled />
    <TelaCadastro cadastrarUsuario={()=> setTela(3)} mudarTela={()=> setTela(1)}/>
  </MainContainer>
  )
case 3:
  return(
    <MainContainer>
      <GlobalStyled/>
      <TelaUsuarioCadastrado mudarTela={()=> setTela(1)}/>
    </MainContainer>
  )
  default:
    return (
      <MainContainer >
      <GlobalStyled />
     <h2>Algo de errado não está certo!</h2>
    </MainContainer>
    )}}

//expressions
// return ( 
//   <MainContainer >
//   <GlobalStyled />
//  {/* condicao ? true : false */}
//  {/* {tela === 1 ?  <TelaLogin /> : <TelaCadastro/>}   */}
//  {/* curto circuito: vai retornar um valor com a condição do valor
//  da variável de estado ser truthy */}
// {(tela || <TelaLogin/>) && <TelaCadastro/>} 
//  </MainContainer>
// )
// }


  
export default App;