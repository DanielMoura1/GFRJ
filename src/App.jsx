import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const navigate = useNavigate();
   const textos= [{t1:'Nossa equipe foi destaque na Record! Participamos recentemente de uma competição internacional de foguetes e satélites nos Estados Unidos, representando o Brasil com muito orgulho. Durante a reportagem, tivemos a oportunidade de falar sobre nossos projetos, os desafios enfrentados e a experiência incrível de trocar conhecimento com equipes do mundo todo.',ig:'gfrj1.png'},{t1:'teste2',ig:''},{t1:'teste3',ig:''},{t1:'teste4',ig:''},{t1:'teste5',ig:''}]
  const [video, setVideo] = useState('lI92RROPZEY')
  const [texto, setTexto] = useState(textos[0].t1)
  const [imagem, setImagem] = useState(textos[0].ig)

  function selecionarVideo (id,tx,igg){
    setVideo(id)
    setTexto(tx)
    setImagem(igg)
  }
 

  return (
    <>
    <div className='logos'>
       <h1>GFRJ + UERJSATS</h1>
    </div>

    <div className='menu'>
        <button onClick={()=> navigate("/quiz")}>QUIZ</button>
          <div>
              <button onClick={()=>selecionarVideo('wd3SnBGkOqc',textos[0].t1,textos[0].ig)} >teste1</button>
              <button onClick={()=>selecionarVideo('VlTv6o_Rtlc',textos[1].t1,textos[1].ig)}>teste2</button>
              <button onClick={()=>selecionarVideo('8BFLSbsTYXE',textos[2].t1,textos[2].ig)}>teste3</button>
              <button onClick={()=>selecionarVideo('P6VWJD41t3I',textos[3].t1,textos[3].ig)}>teste4</button>
              <button onClick={()=>selecionarVideo('yvAqZ_SLuhQ',textos[4].t1,textos[4].ig)}>teste5</button>
          </div>
    </div>
    <iframe width="560" height="315" 
          src={`https://www.youtube.com/embed/${video}`} 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>

        <div className='quadroB'>
          <p>{texto}</p>
          <img className='tam' src={imagem} alt="" />
        </div>
        
     
    </>
  )
}

export default App
