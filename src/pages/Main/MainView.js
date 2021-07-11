/* eslint-disable */
import { Grid, Container } from '@material-ui/core';
import Form from 'components/Form';
import Card from 'components/Card';
const HomeView = props => {
  const { lang } = props;

  return (
    <Container maxWidth="lg">
      <Grid container spacing={1}>
        <Grid item style={{ maxWidth: 800 }}>
          <div>Main </div>
          <Form></Form>
        </Grid>
        <Grid item>
          <div>Rigth </div>
          <div>
            <Card></Card>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomeView;
