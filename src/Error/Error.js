import React from 'react';
import { Grid, Typography } from '@material-ui/core';

const Error = ({ errors }) => {
	return (
		errors.length > 0 && (
			<Grid item style={{ width: '100%' }}>
				<Typography variant='body1' color='textSecondary' align='center'>
					{errors[0].error}
				</Typography>
			</Grid>
		)
	);
};

export default Error;
