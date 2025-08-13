import { useState, useNavigate} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Quiz() {
    const quiz=[{pergunta:'Qual é o nome do mascote da UERJ SATS?',resposta1:'Abasat',resposta2:'satBot',resposta3:'Cubinho',resposta4:'Estelário',res1:true,res2:false,res3:false,res4:false},{pergunta:'Qual desses nomes é de uma missão da UERJ SATS inspirada no folclore brasileiro?',resposta1:'CurupiraSat',resposta2:'IaraSat',resposta3:'SaciCube',resposta4:'BotoSat',res1:false,res2:true,res3:false,res4:false},{pergunta:'Quantos anos o GFRJ fez em 2025?',resposta1:'7 anos',resposta2:' 8 anos',resposta3:'9 anos',resposta4:'10 anos',res1:false,res2:false,res3:true,res4:false},{pergunta:'Qual é a próxima competição do GFRJ e da UERJ SATS?',resposta1:'NASA Rover Challenge',resposta2:'CubeDesign',resposta3:'LASC',resposta4:'IREC',res1:false,res2:false,res3:true,res4:false},{pergunta:'Onde aconteceu a IREC 2025?',resposta1:'Texas',resposta2:'Flórida',resposta3:'Novo México',resposta4:'Arizona',res1:true,res2:false,res3:false,res4:false},{pergunta:'Quantos satélites já foram desenvolvidos pela uerj sats?',resposta1:'2',resposta2:'3',resposta3:'4',resposta4:'5',res1:false,res2:false,res3:true,res4:false},{pergunta:'',resposta1:'Motor',resposta2:'Booster',resposta3:'Estágio superior',resposta4:'Tanque externo',res1:false,res2:false,res3:true,res4:false},{pergunta:'Qual empresa privada foi a primeira a enviar astronautas para a ISS?',resposta1:'Boeing',resposta2:'Blue Origin',resposta3:'SpaceX',resposta4:'Virgin Galactic',res1:false,res2:false,res3:true,res4:false},{pergunta:'O que é empuxo (thrust) em um foguete?',resposta1:' A força que puxa o foguete para o chão',resposta2:' A pressão do combustível no tanque',resposta3:' A força que move o foguete para frente',resposta4:' A velocidade do vento contra o foguete',res1:false,res2:false,res3:true,res4:false},{pergunta:'Qual destes países não tem um programa espacial próprio?',resposta1:'Japão',resposta2:'Brasil',resposta3:'Austrália',resposta4:'Índia',res1:false,res2:false,res3:true,res4:false},]
    const [pergunta,setPergunta] =useState(quiz[0].pergunta)
    const [resposta1,setResposta1] =useState(quiz[0].resposta1)
    const [resposta2,setResposta2] =useState(quiz[0].resposta2)
    const [resposta3,setResposta3] =useState(quiz[0].resposta3)
    const [resposta4,setResposta4] =useState(quiz[0].resposta4)
    const [numeroPergunta,setNumeroPergunta] =useState(0)
    const [acertos,setAcertos]=useState(0)
    const [erros,setErros]=useState(0)
    const [continuar,setContinuar]=useState(true)

    function responder(r){

        if(numeroPergunta >4){
            setContinuar(false)

        }if(r){
            setAcertos(acertos+1)
      
        }else{
         
            setErros(erros+1)
        }
        setPergunta(quiz[numeroPergunta+1].pergunta)
        setResposta1(quiz[numeroPergunta+1].resposta1)
        setResposta2(quiz[numeroPergunta+1].resposta2)
        setResposta3(quiz[numeroPergunta+1].resposta3)
        setResposta4(quiz[numeroPergunta+1].resposta4)
        setNumeroPergunta(numeroPergunta+1)

    }

  
  return (
    <div>
      <div className='perguntas'>
          <p>{pergunta}</p>
      </div>
      <div className={continuar ? 'respostas':'none'}>
        <button className='op'  onClick={()=>responder(quiz[numeroPergunta].res1)}>{resposta1}</button>
        <button className='op'  onClick={()=>responder(quiz[numeroPergunta].res2)}>{resposta2}</button>
        <button className='op'  onClick={()=>responder(quiz[numeroPergunta].res3)}>{resposta3}</button>
        <button className='op'  onClick={()=>responder(quiz[numeroPergunta].res4)}>{resposta4}</button>
        
      </div>
      <div className={continuar ? 'none':'respostas2'}>
        <p>acertou : {acertos}</p>
        <p>errou : {erros}</p>

      </div>
      <div className='base'>

      </div>
    </div>
  )
}

export default Quiz