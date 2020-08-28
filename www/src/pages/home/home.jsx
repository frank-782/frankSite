import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from "@material-ui/core/Container";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Container maxWidth="xl">
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h5" component="h2">
              HI
            </Typography>
            <Typography variant="body2" component="p">
              欢迎来到frank的小站
            </Typography>
          </CardContent>
          <CardActions>
              <Button size="small" href={"/users/register/"} color={'blue'}>创建账号</Button>
              <Button size="small" href={"/users/login/"}>登录</Button>
          </CardActions>
        </Card>
    </Container >
  );
}
