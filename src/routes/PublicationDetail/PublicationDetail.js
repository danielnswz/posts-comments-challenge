import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import { useParams } from 'react-router-dom';
import moment from 'moment';

const useStyles = makeStyles({
	card: {
		display: 'flex',
	},
	cardDetails: {
		flex: 1,
	},
	cardMedia: {
		width: 160,
	},
});

const PublicationDetail = ({ publication, fetchSelectedPublication }) => {
	const classes = useStyles();
	const { id } = useParams();

	useEffect(() => {
		fetchSelectedPublication({ id });
	}, [fetchSelectedPublication, id]);

	return (
		<Grid item xs={12} md={12}>
			<CardActionArea>
				<Card className={classes.card}>
					<div className={classes.cardDetails}>
						<CardContent>
							<Typography component='h2' variant='h5'>
								{publication && publication.title}
							</Typography>
							<Typography variant='caption' color='primary'>
								{publication &&
									`${publication.author.firstName} ${publication.author.lastName}`}
							</Typography>
							<Typography variant='subtitle1' color='textSecondary'>
								{publication &&
									moment(publication.createdAt).format('YYYY/MM/DD')}
							</Typography>
							<Typography variant='subtitle1' paragraph>
								{publication && publication.body}
							</Typography>
						</CardContent>
					</div>
				</Card>
			</CardActionArea>
		</Grid>
	);
};

export default PublicationDetail;
