import { useState } from 'react';
import MainView from './MainView';

export function MainContainer() {
  const [incomingFile, setIncomingFile] = useState({});
  const [editor, setEditor] = useState();
  const [modal, setModal] = useState(false);
  const [card, setCard] = useState({
    name: 'NickName',
    title: '',
    level: 25,
    element: 'brutal',
    star: 1,
    bg_uri: null,
  });

  function openModal() {
    setModal(true);
  }
  function closeModal() {
    setModal(false);
  }

  function handlerUploadBackground(event) {
    const file = event.target.files[0];
    setIncomingFile(prev => ({ ...prev, name: file.name }));

    const reader = new FileReader();
    reader.addEventListener(
      'load',
      function () {
        setIncomingFile(prev => ({ ...prev, file: reader.result }));
        openModal();
      },
      false
    );
    reader.readAsDataURL(file);
  }

  function onCropImage() {
    if (editor) {
      const canvasScaled = editor.getImageScaledToCanvas();
      const croppedImg = canvasScaled.toDataURL();
      setCard(prev => ({ ...prev, bg_uri: croppedImg }));
      closeModal();
    }
  }

  function handlerChangeForm(event) {
    const key = event.target.name;
    const val = event.target.value;
    setCard(prev => ({ ...prev, [key]: val }));
  }

  return (
    <MainView
      file={incomingFile}
      card={card}
      openModal={modal}
      handlerOpenModal={openModal}
      handlerCloseModal={closeModal}
      editorRef={edit => setEditor(edit)}
      onCropImage={onCropImage}
      handlerChangeForm={handlerChangeForm}
      handlerUploadBackground={handlerUploadBackground}
    />
  );
}
