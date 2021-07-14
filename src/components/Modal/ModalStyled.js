/* eslint-disable */
import React, { useState } from 'react';
import {
  Modal,
  Fade,
  Paper,
  Dialog,
  Slide,
  Container,
  Button,
  Grid,
  Slider,
} from '@material-ui/core';
import { useStyles } from './styles';
import ghost from 'assets/imgs/macro_0.png';
import AvatarEditor from 'react-avatar-editor';
import AdbIcon from '@material-ui/icons/Adb';
//import img_example from 'assets/imgs/test.png';
import img_example from 'assets/imgs/test1.jpg';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export function ModalStyled(props) {
  const { open, onClose, image } = props;
  const [rotate, setRotate] = useState();
  const [scale, setScale] = useState();

  const classes = useStyles({ img: ghost });
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={onClose}
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
                <AdbIcon></AdbIcon>
              </Grid>
              <Grid item xs>
                <Slider orientation="vertical"></Slider>
              </Grid>
              <Grid item xs={1}>
                <AdbIcon></AdbIcon>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <div className={classes.ghost}></div>
            <AvatarEditor
              rotate={rotate}
              //image={image}
              image={img_example}
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
            <AdbIcon></AdbIcon>
          </Grid>
          <Grid item xs>
            <Slider></Slider>
          </Grid>
        </Grid>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Button color="primary" variant="contained" className={classes.btn}>
            Select
          </Button>
          <Button color="secondary" variant="contained" className={classes.btn}>
            cancel
          </Button>
        </Grid>
      </Paper>
    </Dialog>
  );
}
