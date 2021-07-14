/* eslint-disable */
import { useState } from 'react';
import MainView from './MainView';

export function MainContainer() {
  const [incomingFile, setIncomingFile] = useState({});
  // todos los movimientos del modal pasan en el modal nomas
  /*
  const [avatar, setAvatar] = useState({
    rotate: 0,
    image: null,
    scale: 1,
  });
  */
  const [openModal, setOpenModal] = useState(false);
  const [card, setCard] = useState({
    name: 'NickName',
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
        //setIncomingFile(prev => ({ ...prev, file: reader.result }));
        loadEditor(reader.result);
        //preview.src = ;
      },
      false
    );

    reader.readAsDataURL(file);
  }

  function loadEditor(result) {
    setOpenModal(true);
    setIncomingFile(prev => ({ ...prev, file: result }));
    //setAvatar(prev => ({ ...prev, image: result }));
  }

  function onCropImage(image) {}

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
      imageModal={null}
      openModal={openModal}
      onCloseModal={() => {}}
      onCropImage={onCropImage}
      handlerChangeForm={handlerChangeForm}
      handlerUploadBackground={handlerUploadBackground}
    />
  );
}
