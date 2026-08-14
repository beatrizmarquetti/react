import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Paragrafo from './Paragrafo'
<<<<<<< HEAD
import CaixaTexto from './assets/CaixaTexto'
=======
import CaixaTexto from './CaixaTexto'
>>>>>>> 194615fe076f17a1ed1262253afe30e84b411f8a

function App() {
  const [num, setNum] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
<<<<<<< HEAD
        </div>
        <CaixaTexto/>
        
        <Paragrafo nome="FULANO"/>
        <Paragrafo nome="CICLANO"/>

      </section>

      <div className="ticks"></div>
      <section id="next-steps">
       
      </section>
=======

        </div>
        <CaixaTexto/>

        <Paragrafo nome= "Fulano"/>
        <Paragrafo nome= "Beltrano"/>


        
      </section>

      <div className="ticks"></div>

      
>>>>>>> 194615fe076f17a1ed1262253afe30e84b411f8a

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
