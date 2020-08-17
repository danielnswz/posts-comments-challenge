import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	toolbar: {
		borderBottom: `1px solid ${theme.palette.divider}`,
	},
	toolbarTitle: {
		flex: 1,
	},
	toolbarSecondary: {
		justifyContent: 'space-between',
		overflowX: 'auto',
	},
	toolbarLink: {
		padding: theme.spacing(1),
		flexShrink: 0,
	},
}));

const Header = ({ sections, title }) => {
	const classes = useStyles();

	return (
		<React.Fragment>
			<Toolbar className={classes.toolbar}>
				<Typography
					component='h2'
					variant='h5'
					color='inherit'
					align='center'
					noWrap
					className={classes.toolbarTitle}
				>
					{title}
				</Typography>
			</Toolbar>
			<Toolbar
				component='nav'
				variant='dense'
				className={classes.toolbarSecondary}
			>
				{sections.map((section) => (
					<Link
						color='inherit'
						key={section.title}
						variant='body2'
						to={section.url}
						className={classes.toolbarLink}
					>
						{section.title}
					</Link>
				))}
			</Toolbar>
		</React.Fragment>
	);
};

Header.propTypes = {
	sections: PropTypes.array,
	title: PropTypes.string,
};

export default Header;
