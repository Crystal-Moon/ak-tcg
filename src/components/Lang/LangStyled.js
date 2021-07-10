import React from 'react';
import classnames from 'classnames';
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

  function onChangeLang(lang) {
    i18n.changeLanguage(lang);
    localStorage.setItem('lenguage', lang);
  }

  return (
    <FormControl component="fieldset" className={classes.root}>
      {LANG.map(({ lang, flag }, k) => (
        <div key={k}>
          <input
            type="radio"
            className={classes.input}
            name="lang"
            id={`lang_${lang}`}
            value={lang}
            checked={selectedLang === lang}
          />
          <label
            className={classnames(classes.label, {
              [classes.checked]: selectedLang === lang,
            })}
            htmlFor={`lang_${lang}`}
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
