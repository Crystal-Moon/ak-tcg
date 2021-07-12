/* eslint-disable */
import { useState } from 'react';
import MainView from './MainView';

export function MainContainer() {
  const [incomingFile, setIncomingFile] = useState({});
  const [finalFile, setFinalFile] = useState();
  const [card, setCard] = useState({
    level: 25,
    element: 'brutal',
    star: 1,
  });

  function handlerUploadBackground(event) {
    const file = event.target.files[0];
    console.log({ file });
    //const name = file.name;
    setIncomingFile(prev => ({ ...prev, name: file.name }));

    const reader = new FileReader();
    reader.onload = function (event) {
      // El texto del archivo se mostrará por consola aquí
      //console.log(event.target.result);
    };

    reader.addEventListener(
      'load',
      function () {
        // convert image file to base64 string
        console.log('reader.result', reader.result);
        //setIncomingFileTest(reader.result); // este sirve para src
        setIncomingFile(prev => ({ ...prev, file: reader.result }));
        //preview.src = ;
      },
      false
    );

    reader.readAsDataURL(file);
  }

  function handlerChangeForm(event) {
    const key = event.target.name;
    const val = event.target.value;
    console.log('se setea', key, ':', val);
    setCard(prev => ({ ...prev, [key]: val }));
    console.log('card', card);
  }

  return (
    <MainView
      file={incomingFile}
      card={card}
      handlerChangeForm={handlerChangeForm}
      handlerUploadBackground={handlerUploadBackground}
    />
  );
}
