import { Div, Titulo } from "./styled";

function TelaUsuarioCadastrado(props) {
    return (
        <Div>
            <Titulo>Você concluiu o cadastro, parabéns!!!</Titulo>
            <button onClick={props.mudarTela}>RETORNAR PARA LOGIN</button>
        </Div>
    )
}

export default TelaUsuarioCadastrado;