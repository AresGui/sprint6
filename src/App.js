import React, { useState } from 'react';
import Escena from './components/escena/Escena';
import { texts } from './texts';
import { GrupoFrases, Btn, Forma, LandingPage } from './styled';


export default function App() {

  const [bgImage, setBgImage] = useState(texts[0].img);


  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClickBackward = () => {
    setCurrentIndex(currentIndex => {
      if (currentIndex === 0) {
        // pasar del primer componente al último
        setBgImage(texts[3].img);
        return 3;
      } else {
        // en los demás casos, pasar al componente anterior
        setBgImage(texts[currentIndex - 1].img);
        return currentIndex - 1;
      }
    });
  };

  /**
   * Opcionalmente simplificado con operador ternario:
   * const handleClickBackward = () => {
    setCurrentIndex(currentIndex => currentIndex === 0 ? 3 : currentIndex - 1)
  } */

  const handleClickForward = () => {
    setCurrentIndex(currentIndex => {
      if (currentIndex === 3) {
        // pasar del último componente al primero
        setBgImage(texts[0].img);
        return 0;
      } else {
        // en los demás casos, pasar al siguiente componente
        setBgImage(texts[currentIndex + 1].img);
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
        <div className="bg-image" style={{
          backgroundImage: bgImage, backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }} >
          <div>
            <Btn onClick={handleClickBackward}>Anterior</Btn>
            <Btn onClick={handleClickForward}>Següent</Btn>
          </div>

          <GrupoFrases>
            <Forma id={0} isRight={currentIndex === 0}>
              <Escena name={texts[0].sentence} image={texts[0].img} />
            </Forma>
            <Forma id={1} isRight={currentIndex === 1}>
              <Escena name={texts[1].sentence} image={texts[1].img} />
            </Forma>
            <Forma id={2} isRight={currentIndex === 2}>
              <Escena name={texts[2].sentence} image={texts[2].img} />
            </Forma>
            <Forma id={3} isRight={currentIndex === 3}>
              <Escena name={texts[3].sentence} image={texts[3].img} />
            </Forma>
          </GrupoFrases>
        </div>
      )}
    </div>
  );
}




