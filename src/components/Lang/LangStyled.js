import React from 'react';
import { useStyles } from './styles';
import { useTranslation } from 'react-i18next';
import { IconButton, FormControl } from '@material-ui/core';

const LANG = [
  { lang: 'es', flag: 'esp' },
  { lang: 'en', flag: 'gbr' },
];

export function LangStyled() {
  const { i18n } = useTranslation();
  const selectedLang = i18n.language;
  const classes = useStyles();

  function onChangeLang(locale) {
    i18n.changeLanguage(locale);
    localStorage.setItem('lenguage', locale);
  }

  return (
    <FormControl component="fieldset" className="Lang" className={classes.root}>
      {LANG.map(({ lang, flag }, k) => (
        <div className="col-auto" key={k}>
          <input
            type="radio"
            className={classes.input}
            name="lang"
            id={'lang1' + lang}
            value={lang}
            checked={selectedLang === lang}
          />
          <label
            className={`${classes.label} ${
              selectedLang === lang ? classes.checked : ''
            }`}
            htmlFor={'lang1' + lang}
          >
            <IconButton
              onClick={() => onChangeLang(lang)}
              className={classes.btn}
              color="primary"
            >
              <img
                className={classes.flag}
                src={`https://restcountries.eu/data/${flag}.svg`}
                alt={lang}
              />
            </IconButton>
          </label>
        </div>
      ))}
    </FormControl>
  );
}
