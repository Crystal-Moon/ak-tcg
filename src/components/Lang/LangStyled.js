/* eslint-disable */
import { useTranslation } from 'react-i18next';
import Button from '@material-ui/core/Button';
export function LangStyled(props) {
  const { t, i18n } = useTranslation();

  function onChangeLang(locale) {
    if (locale instanceof Object) locale = locale.id;
    i18n.changeLanguage(locale);
    //moment.locale(locale);
    localStorage.setItem('lenguage', locale);
  }

  return (
    <div>
      language--
      <Button
        variant="contained"
        color="primary"
        onClick={() => onChangeLang('es')}
      >
        ES
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => onChangeLang('en')}
      >
        EN
      </Button>
    </div>
  );
}
