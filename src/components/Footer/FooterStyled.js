/* eslint-disable */
import { Grid, Container } from '@material-ui/core';

export function FooterStyled(props) {
  const { lang } = props;
  return (
    <Container maxWidth="lg">
      <Grid container spacing={1}>
        <div>Footer</div>
      </Grid>
    </Container>
  );
}
