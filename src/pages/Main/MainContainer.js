/* eslint-disable */
import { useState } from 'react';
import MainView from './MainView';

export function MainContainer() {
  const [file, setFile] = useState({});
  const [card, setCard] = useState({});

  function handlerUploadBackground(event) {
    var file = event.target.files[0];
    console.log({ file });
    //const name = file.name;
    setFile(prev => ({ ...prev, name: file.name }));

    var reader = new FileReader();
    reader.onload = function (event) {
      // El texto del archivo se mostrará por consola aquí
      //console.log(event.target.result);
    };

    reader.addEventListener(
      'load',
      function () {
        // convert image file to base64 string
        console.log('reader.result', reader.result);
        //setFileTest(reader.result); // este sirve para src
        setFile(prev => ({ ...prev, file: reader.result }));
        //preview.src = ;
      },
      false
    );

    reader.readAsDataURL(file);
  }

  return (
    <MainView
      file={file}
      card={card}
      handlerUploadBackground={handlerUploadBackground}
    />
  );
}
