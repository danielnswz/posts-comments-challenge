import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const Copyright: React.FC = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {`Copyright © posts-comments-challenge ${new Date().getFullYear()}.`}
    </Typography>
  );
};

const useStyles = makeStyles((theme) => ({
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
}));

export const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          {`You are in a **${(
            process.env.REACT_APP_ENV_NAME || "react"
          ).toLocaleLowerCase()}** version of this app.`}
        </Typography>
        <Copyright />
      </Container>
    </footer>
  );
};
