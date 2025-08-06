import { useState, useNavigate} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Quiz() {
    const quiz=[{pergunta:'Quem nós somos ?',resposta1:'Grupo de Fofocas do Rio de Janeiro',resposta2:'Grupo de Foguetes do RIO de Janeiro',resposta3:'Grupo de Fotografos do Rio de Janeiro',resposta4:'Grupo de Fazendeiros do Rio de Janeiro',res1:false,res2:true,res3:false,res4:false},{pergunta:'Quanto é 1+1',resposta1:'2',resposta2:'4',resposta3:'8',resposta4:'22',res1:true,res2:false,res3:false,res4:false},{pergunta:'Qual é a principal função de um foguete?',resposta1:'Medir terremotos',resposta2:'Explorar o fundo do oceano',resposta3:'Lançar objetos ao espaço',resposta4:'Produzir energia sola',res1:false,res2:false,res3:true,res4:false},{pergunta:'Qual gás é mais comumente usado em combustíveis de foguetes líquidos?',resposta1:'Oxigênio',resposta2:'Dióxido de carbono',resposta3:'Hidrogênio',resposta4:'Gás natural',res1:false,res2:false,res3:true,res4:false},{pergunta:'O que significa a sigla "NASA"?',resposta1:'North American Space Association',resposta2:'National Aeronautics and Space Administration',resposta3:'National Association for Science Advancement',resposta4:'North Atlantic Science Agency',res1:false,res2:true,res3:false,res4:false},{pergunta:'Qual destes é um tipo de foguete reutilizável?',resposta1:'Saturn V',resposta2:'Space Shuttle',resposta3:'Soyuz',resposta4:'Ariane 5',res1:false,res2:true,res3:false,res4:false},{pergunta:'Qual parte de um foguete se separa e leva a carga ao espaço?',resposta1:'Motor',resposta2:'Booster',resposta3:'Estágio superior',resposta4:'Tanque externo',res1:false,res2:false,res3:true,res4:false},{pergunta:'Qual empresa privada foi a primeira a enviar astronautas para a ISS?',resposta1:'Boeing',resposta2:'Blue Origin',resposta3:'SpaceX',resposta4:'Virgin Galactic',res1:false,res2:false,res3:true,res4:false},{pergunta:'O que é empuxo (thrust) em um foguete?',resposta1:' A força que puxa o foguete para o chão',resposta2:' A pressão do combustível no tanque',resposta3:' A força que move o foguete para frente',resposta4:' A velocidade do vento contra o foguete',res1:false,res2:false,res3:true,res4:false},{pergunta:'Qual destes países não tem um programa espacial próprio?',resposta1:'Japão',resposta2:'Brasil',resposta3:'Austrália',resposta4:'Índia',res1:false,res2:false,res3:true,res4:false},]
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

        if(numeroPergunta >8){
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
      <div className={continuar ? 'none':'respostas'}>
        <p>acertou : {acertos}</p>
        <p>errou : {erros}</p>

      </div>
      <div className='base'>

      </div>
    </div>
  )
}

export default Quiz