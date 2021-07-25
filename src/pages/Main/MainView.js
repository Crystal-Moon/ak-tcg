/* eslint-disable */
import useMediaQuery from '@material-ui/core/useMediaQuery';
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
  const isCardMd = useMediaQuery('(max-width:1030px)');
  const isMd = useMediaQuery('(max-width:960px)');
  const isSm = useMediaQuery('(max-width:600px)');

  const classes = useStyles({ isMd, isCardMd });

  //if(isSM){
  //  return <div>NO available celular</div>
  //}

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Modal
          open={openModal}
          isSm={isSm}
          handlerCloseModal={handlerCloseModal}
          image={file.file}
          handlerCropImage={onCropImage}
          editorRef={editorRef}
        />

        <Grid container spacing={8} className={classes.mainContainer} xs={11}>
          <Grid item xs={12} md={7}>
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
              isSm={isSm}
              handlerOpenModal={handlerOpenModal}
              onChangeFile={handlerUploadBackground}
              onChangeForm={handlerChangeForm}
            />
          </Grid>
          <Grid item xs={12} md={5} className={classes.cardContainer}>
            <h2>{t('pages.main.preview')}</h2>
            <Card card={card} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default HomeView;
