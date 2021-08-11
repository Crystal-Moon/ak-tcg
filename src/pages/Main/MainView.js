import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Grid, Container } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { useStyles } from './styles';
import Form from 'components/Form';
import Card from 'components/Card';
import Modal from 'components/Modal';
import Icon from 'components/Icon';
import swipIcon from 'assets/icons/swip.svg';

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
  const isXs = useMediaQuery('(max-width:392px)');
  const classes = useStyles({ isMd, isCardMd });

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

        <Grid
          container
          spacing={5}
          className={classes.mainContainer}
          xs={12}
          sm={11}
        >
          <Grid item xs={12} md={7}>
            <h2>{t('pages.main.form')}</h2>
            <p>{t('pages.main.description')}</p>
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
            <h2>
              {t('pages.main.preview')} {isXs && <Icon src={swipIcon} />}
            </h2>
            <div>
              <Card card={card} />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default HomeView;
