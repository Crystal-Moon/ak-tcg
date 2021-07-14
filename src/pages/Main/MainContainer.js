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
    console.log('en el handler input');

    //if (file.name === incomingFile.name) setOpenModal(true);

    const reader = new FileReader();

    reader.addEventListener(
      'load',
      function () {
        // convert image file to base64 string
        //console.log('reader.result', reader.result);
        console.log('imagen loaded');
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
    setIncomingFile(prev => ({ ...prev, file: result }));
    setOpenModal(true);
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
      openModal={openModal}
      handlerOpenModal={() => setOpenModal(true)}
      handlerCloseModal={() => setOpenModal(false)}
      onCropImage={onCropImage}
      handlerChangeForm={handlerChangeForm}
      handlerUploadBackground={handlerUploadBackground}
    />
  );
}
