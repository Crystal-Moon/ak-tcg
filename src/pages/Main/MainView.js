/* eslint-disable */
import { Grid, Container } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Modal
          open={openModal}
          handlerCloseModal={handlerCloseModal}
          image={file.file}
          handlerCropImage={onCropImage}
          editorRef={editorRef}
        />

        <Grid container spacing={1} className={classes.mainContainer}>
          <Grid item xs={7}>
            <h2>Main {t('pages.main.form')}</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              vitae cursus est. Vivamus eget placerat tortor, non scelerisque
              ante. Nam lacus nibh, finibus vitae gravida quis, euismod et
              tellus. Etiam facilisis lectus et arcu fringilla, et fermentum dui
              imperdiet. In rutrum interdum iaculis. Ut eu euismod mauris,
              euismod placerat felis.
            </p>
            <Form
              fileName={file.name}
              form={card}
              handlerOpenModal={handlerOpenModal}
              onChangeFile={handlerUploadBackground}
              onChangeForm={handlerChangeForm}
            />
          </Grid>
          <Grid item xs={5} className={classes.cardContainer}>
            <h2>{t('pages.main.preview')}</h2>
            <Card card={card} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default HomeView;
