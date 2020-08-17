import React from 'react';
import { Box, Card, Grid, Typography } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import moment from 'moment';
import { Link, useHistory } from 'react-router-dom';

const Publication = ({ publication, loading }) => {
	const history = useHistory();
	const handlePublicationClick = () => {
		if (publication) {
			history.push(`/publication/${publication.id}`);
		}
	};

	return (
		<Grid item style={{ width: '100%' }}>
			<Link to='#' onClick={handlePublicationClick}>
				<Card style={{ padding: 10, width: '100%' }}>
					<Box>
						{loading ? (
							<Box pt={0.5}>
								<Skeleton />
							</Box>
						) : (
							<Grid container direction='row'>
								<Grid item md={10}>
									<Typography gutterBottom variant='body2'>
										{`${publication.title}`}
									</Typography>
								</Grid>
								<Grid item md={2}>
									<Typography gutterBottom variant='body2'>
										{`${moment(publication.createdAt).format('YYYY/MM/DD')}`}
									</Typography>
								</Grid>
							</Grid>
						)}
					</Box>
				</Card>
			</Link>
		</Grid>
	);
};

export default Publication;
