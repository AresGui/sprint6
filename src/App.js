import React, { useState } from 'react';
import Escena from './components/escena/Escena';
import { texts } from './texts';
import { GrupoFrases, Btn, Forma, LandingPage } from './styled';



export default function App() {

  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClickBackward = () => {
    setCurrentIndex(currentIndex => {
      if (currentIndex === 0) {
        // pasar del primer componente al último
        return 3;
      } else {
        // en los demás casos, pasar al componente anterior
        return currentIndex - 1;
      }
    });
  };

  /**
   * Opcionalmente simplificado con operador ternario:
   * 
   * const handleClickBackward = () => {
    setCurrentIndex(currentIndex => currentIndex === 0 ? 3 : currentIndex - 1)
  } 
  */

  const handleClickForward = () => {
    setCurrentIndex(currentIndex => {
      if (currentIndex === 3) {
        // pasar del último componente al primero
        return 0;
      } else {
        // en los demás casos, pasar al siguiente componente
        return currentIndex + 1;
      }
    });
  };


  return (
    <div>
      {!isButtonClicked && (
        <LandingPage>
          <h1>Benvolgut a la web de consells</h1>
          <p>Fes click al següent botó per a començar:</p>
          <button onClick={() => setIsButtonClicked(true)}>Començar</button>
        </LandingPage>
      )}

      {isButtonClicked && (
        <div>
          <div>
            <Btn onClick={handleClickBackward}>Anterior</Btn>
            <Btn onClick={handleClickForward}>Següent</Btn>
          </div>

          <GrupoFrases>
            <Forma id={0} isRight={currentIndex === 0}><Escena name={texts[0].sentence} /></Forma>
            <Forma id={1} isRight={currentIndex === 1}><Escena name={texts[1].sentence} /></Forma>
            <Forma id={2} isRight={currentIndex === 2}><Escena name={texts[2].sentence} /></Forma>
            <Forma id={3} isRight={currentIndex === 3}><Escena name={texts[3].sentence} /></Forma>
          </GrupoFrases>
        </div>
      )}
    </div>
  );
}




