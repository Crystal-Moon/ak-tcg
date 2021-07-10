/* eslint-disable */
import { useState } from 'react';
import { Container } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import Header from 'components/Header';
import Main from 'pages/Main';
import Footer from 'components/Footer';

function App() {
  //const [lang, setLang] = useState('es');
  const { i18n } = useTranslation();

  /*
  function onChangeLang(locale) {
    if (locale instanceof Object) locale = locale.id;
    i18n.changeLanguage(locale);
    //moment.locale(locale);
    localStorage.setItem('lenguage', locale);
  }
  */

  return (
    <Container maxWidth="lg">
      <Header />
      <Main />
      <Footer />
    </Container>
  );
}

export default App;
