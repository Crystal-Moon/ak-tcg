/* eslint-disable */
import { Grid, Container } from '@material-ui/core';
import { useStyles } from './styles';
import Form from 'components/Form';
import Card from 'components/Card';

const HomeView = props => {
  const { file, card, handlerUploadBackground } = props;
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <Grid container spacing={1}>
        <Grid item xs={7} className={classes.formContainer}>
          <h2>Main </h2>
          <Form
            fileName={file.name}
            card={card}
            fileTest={file.file}
            onChangeFile={handlerUploadBackground}
          />
        </Grid>
        <Grid item xs={5} className={classes.cardContainer}>
          <h2>Rigth </h2>
          <Card />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomeView;
