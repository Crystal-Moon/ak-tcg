import React from 'react';
import classnames from 'classnames';
import { useStyles } from './styles';
import { useTranslation } from 'react-i18next';
import { FormControl, Tooltip, Chip } from '@material-ui/core';

const LANG = [
  { lang: 'es', label: 'Español' },
  { lang: 'en', label: 'English' },
];

export function LangStyled() {
  const { i18n } = useTranslation();
  const selectedLang = i18n.language;
  const classes = useStyles();

  function onChangeLang(lang) {
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);
  }

  return (
    <FormControl className={classes.root}>
      {LANG.map(({ lang, label }, k) => (
        <Tooltip title={label} key={k}>
          <Chip
            className={classnames(classes.label, {
              [classes.checked]: selectedLang === lang,
            })}
            label={lang.toUpperCase()}
            onClick={() => onChangeLang(lang)}
          />
        </Tooltip>
      ))}
    </FormControl>
  );
}
