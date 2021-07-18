/* eslint-disable */
import { Grid, Container } from '@material-ui/core';
import { useStyles } from './styles';
import Form from 'components/Form';
import Card from 'components/Card';
import Modal from 'components/Modal';

const HomeView = props => {
  const {
    file,
    card,
    handlerUploadBackground,
    handlerChangeForm,
    editorRef,
    openModal,
    handlerOpenModal,
    handlerCloseModal,
    onCropImage,
  } = props;
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <Modal
        open={openModal}
        handlerCloseModal={handlerCloseModal}
        image={file.file}
        handlerCropImage={onCropImage}
        editorRef={editorRef}
      />

      <Grid container spacing={1}>
        <Grid item xs={7} className={classes.formContainer}>
          <h2>Main </h2>
          <Form
            fileName={file.name}
            form={card}
            handlerOpenModal={handlerOpenModal}
            onChangeFile={handlerUploadBackground}
            onChangeForm={handlerChangeForm}
          />
        </Grid>
        <Grid item xs={5} className={classes.cardContainer}>
          <h2>Rigth </h2>
          <Card card={card} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomeView;
