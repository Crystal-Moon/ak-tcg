/* eslint-disable */
import React, { useState } from 'react';
import { Paper, Dialog, Slide, Button, Grid, Slider } from '@material-ui/core';
import { useStyles } from './styles';
import { useTranslation } from 'react-i18next';
import AvatarEditor from 'react-avatar-editor';
import Icon from 'components/Icon';
import zoomIn from 'assets/icons/zoom_in.svg';
import zoomOut from 'assets/icons/zoom_out.svg';
import rotateIcon from 'assets/icons/rotate.svg';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export function ModalStyled(props) {
  const { t } = useTranslation();
  const {
    open,
    image,
    handlerCloseModal,
    handlerCropImage,
    editorRef,
    isSm,
  } = props;
  const [rotate, setRotate] = useState(0);
  const [scale, setScale] = useState(1);
  const classes = useStyles({ isSm });

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      className={classes.root}
    >
      <Paper elevation={3} className={classes.paper}>
        <Grid container spacing={2} justifyContent="center">
          <p>{t('components.modal.description')}</p>
        </Grid>
        <Grid container direction={isSm ? 'column' : 'row'} spacing={2}>
          <Grid item>
            <Grid
              item
              container
              direction={isSm ? 'row-reverse' : 'column'}
              justifyContent="space-between"
              style={{ height: '100%' }}
              spacing={2}
            >
              <Grid item xs={Number(isSm) + 1}>
                <Icon className={classes.iconZoom} src={zoomIn} />
              </Grid>
              <Grid item xs={!isSm + 8}>
                <Slider
                  orientation={isSm ? 'horizontal' : 'vertical'}
                  value={scale}
                  min={1}
                  max={4}
                  step={0.01}
                  onChange={(event, newValue) => setScale(newValue)}
                />
              </Grid>
              <Grid item xs={Number(isSm) + 1}>
                <Icon className={classes.iconZoom} src={zoomOut} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.avatarContainer}>
            <div className={classes.ghost}></div>
            <AvatarEditor
              ref={editorRef}
              rotate={rotate}
              image={image}
              scale={scale}
              height={!isSm ? 432 : 324}
              width={!isSm ? 303 : 227}
              border={0}
              crossOrigin="anonymous"
            />
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          spacing={2}
          justifyContent="space-between"
        >
          <Grid item xs={1}>
            <Icon className={classes.iconRotate} src={rotateIcon} />
          </Grid>
          <Grid item xs={10}>
            <Slider
              max={360}
              value={rotate}
              onChange={(event, newValue) => setRotate(newValue)}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Button
            color="primary"
            variant="contained"
            className={classes.btn}
            onClick={handlerCropImage}
          >
            {t('components.modal.crop')}
          </Button>
          <Button
            color="secondary"
            variant="contained"
            className={classes.btn}
            onClick={handlerCloseModal}
          >
            {t('components.modal.cancel')}
          </Button>
        </Grid>
      </Paper>
    </Dialog>
  );
}
