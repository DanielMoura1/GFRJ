import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const navigate = useNavigate();
  const [video, setVideo] = useState('lI92RROPZEY')

  function selecionarVideo (id){
    setVideo(id)
  }

  return (
    <>
      <button onClick={()=> navigate("/quiz")}>gfrj</button>
      <div>
          <button onClick={()=>selecionarVideo('lI92RROPZEY')} >teste1</button>
          <button onClick={()=>selecionarVideo('VlTv6o_Rtlc')}>teste2</button>
          <button onClick={()=>selecionarVideo('8BFLSbsTYXE')}>teste3</button>
          <button onClick={()=>selecionarVideo('P6VWJD41t3I')}>teste4</button>
          <button onClick={()=>selecionarVideo('yvAqZ_SLuhQ')}>teste5</button>
      </div>
      <iframe width="560" height="315" 
        src={`https://www.youtube.com/embed/${video}`} 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </>
  )
}

export default App
