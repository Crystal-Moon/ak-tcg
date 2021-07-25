/* eslint-disable */
import { makeStyles } from '@material-ui/core/styles';
import ukn_4 from 'assets/imgs/unknown_4.png';
import ukn_14 from 'assets/imgs/unknown_14.png';
import ukn_15 from 'assets/imgs/unknown_15.png';

export const useStyles = makeStyles({
  root: ({ isCardMd }) => {
    const style = {
      '& p, & h2': {
        margin: 0,
        marginBottom: '0.7em',
      },
      '& h2': {
        textAlign: 'center',
      },
      paddingBottom: '3em',
      paddingTop: '4em',
      backgroundImage: `url(${ukn_14})`,
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
    backgroundColor: '#e4ebff',
    borderRadius: '0.5em',
    //padding: '2.7em',
    paddingRight: 0,
    margin: 'auto',
  },
  cardContainer: ({isMd, isSm})=>{
    const style={
    minWidth: 'max-content',
    paddingLeft: '0px !important',
    //paddingRight: '32px !important',
    }
    if(isMd){
      style.padding = 0;
      style.margin = 'auto'
    }
   /* if(isSm){
      style.minWidth = 0
    }*/

    return style;
  },
});
