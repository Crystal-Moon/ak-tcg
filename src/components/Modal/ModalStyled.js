/* eslint-disable */
import React, { useState } from 'react';
import { Paper, Dialog, Slide, Button, Grid, Slider } from '@material-ui/core';
import { useStyles } from './styles';
import { useTranslation } from 'react-i18next';
import ghost from 'assets/imgs/macro_0.png';
import AvatarEditor from 'react-avatar-editor';
import AdbIcon from '@material-ui/icons/Adb';
//import img_example from 'assets/imgs/test1.jpg';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export function ModalStyled(props) {
  const { t } = useTranslation();
  const {
    open,
    image,
    handlerCloseModal,
    handlerCropImage = some => console.log('cortado', some),
  } = props;
  const [rotate, setRotate] = useState(0);
  const [scale, setScale] = useState(1);
  const classes = useStyles({ img: ghost });

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      className={classes.root}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <Paper elevation={3} className={classes.paper}>
        <Grid container direction="row" spacing={2}>
          <Grid item>
            <Grid
              item
              container
              direction="column"
              style={{ height: '100%' }}
              spacing={2}
            >
              <Grid item xs={1}>
                <AdbIcon />
              </Grid>
              <Grid item xs>
                <Slider
                  orientation="vertical"
                  value={scale}
                  min={1}
                  max={4}
                  step={0.01}
                  onChange={(event, newValue) => setScale(newValue)}
                />
              </Grid>
              <Grid item xs={1}>
                <AdbIcon />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <div className={classes.ghost}></div>
            <AvatarEditor
              rotate={rotate}
              image={image}
              scale={scale}
              height={512}
              width={360}
              border={0}
              crossOrigin="anonymous"
            />
          </Grid>
        </Grid>
        <Grid container direction="row" spacing={2}>
          <Grid item xs={1}>
            <AdbIcon />
          </Grid>
          <Grid item xs>
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
