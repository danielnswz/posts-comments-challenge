import React from 'react';
import {
	Grid,
	Card,
	makeStyles,
	Avatar,
	CardHeader,
	Button,
} from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles((theme) => ({
	card: {
		maxWidth: 345,
	},
}));

const Author = ({ author, selectAuthor, selectedAuthor, loading }) => {
	const classes = useStyles();

	const handleAuthorClick = () => {
		if (author && selectedAuthor === author.id) {
			return selectAuthor({ id: null });
		}
		if (author) {
			selectAuthor({ id: author.id });
		}
	};

	const cardBg = author && selectedAuthor === author.id ? '#D3D3D3' : 'white';

	return (
		<Grid item>
			<Card
				className={classes.card}
				style={{
					backgroundColor: cardBg,
				}}
			>
				<Button onClick={handleAuthorClick}>
					<CardHeader
						avatar={
							loading ? (
								<Skeleton
									animation='wave'
									variant='circle'
									width={40}
									height={40}
								/>
							) : (
								<Avatar>
									{`${author.firstName.charAt(0)}${author.lastName.charAt(0)}`}
								</Avatar>
							)
						}
						title={
							loading ? (
								<Skeleton
									animation='wave'
									height={10}
									variant='rect'
									width='100px'
									style={{ marginBottom: 6 }}
								/>
							) : (
								`${author.firstName} ${author.lastName}`
							)
						}
						subheader={
							loading ? (
								<Skeleton animation='wave' height={10} width='40%' />
							) : (
								author.email
							)
						}
					/>
				</Button>
			</Card>
		</Grid>
	);
};

export default Author;
