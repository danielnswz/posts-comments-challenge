import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

function Copyright() {
	return (
		<Typography variant='body2' color='textSecondary' align='center'>
			{`Copyright © sweatworks-challenge ${new Date().getFullYear()}.`}
		</Typography>
	);
}

const useStyles = makeStyles((theme) => ({
	footer: {
		borderTop: `1px solid ${theme.palette.divider}`,
		marginTop: theme.spacing(8),
		padding: theme.spacing(6, 0),
	},
}));

const Footer = () => {
	const classes = useStyles();

	return (
		<footer className={classes.footer}>
			<Container maxWidth='lg'>
				<Typography
					variant='subtitle1'
					align='center'
					color='textSecondary'
					component='p'
				>
					{`You are in a **${process.env.REACT_APP_ENV_NAME.toLocaleLowerCase()}** version of this app.`}
				</Typography>
				<Copyright />
			</Container>
		</footer>
	);
};

export default Footer;
