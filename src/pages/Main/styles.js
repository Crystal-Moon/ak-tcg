import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: ({ isCardMd }) => {
    const style = {
      '& p, & h2': {
        margin: 0,
        marginBottom: '0.7em',
        whiteSpace: 'break-spaces',
      },
      '& h2': {
        textAlign: 'center',
      },
      paddingBottom: '3em',
      paddingTop: '4em',
      backgroundImage: 'url("https://imgur.com/wys2bRo.jpg")',
      backgroundSize: 'cover',
      height: '90vh',
      minHeight: '38em',
      backgroundPosition: 'bottom center',
    };
    if (isCardMd) {
      style.height = '100%';
    }
    return style;
  },
  mainContainer: {
    backgroundColor: '#f4fff6',
    borderRadius: '0.5em',
    paddingRight: 0,
    margin: 'auto',
  },
  cardContainer: ({ isMd }) => {
    const style = {
      minWidth: 'max-content',
      paddingLeft: '0px !important',
      paddingRight: '20px !important',
      '&>div': {
        overflow: 'auto',
        margin: 0,
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: 'calc(85vw - 32px)',
      },
    };
    if (isMd) {
      style.padding = 0;
      style.margin = 'auto';
    }
    return style;
  },
});
