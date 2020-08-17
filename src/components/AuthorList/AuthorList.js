import React, { useEffect } from 'react';
import Author from '../Author';
import { Grid } from '@material-ui/core';

const AuthorList = ({ fetchAuthors, loading, authors }) => {
	useEffect(() => {
		fetchAuthors();
	}, [fetchAuthors]);

	return (
		<Grid item md={4} lg={4}>
			<div
				style={{
					overflowY: 'auto',
					maxHeight: '450px',
					margin: 0,
					paddingBottom: 10,
				}}
			>
				<Grid
					container
					direction='column'
					justify='center'
					alignItems='center'
					spacing={2}
				>
					{(loading ? Array.from(new Array(3)) : authors).map(
						(author, index) => (
							<Author
								loading={loading}
								author={author}
								key={author ? author.id : index}
							/>
						)
					)}
				</Grid>
			</div>
		</Grid>
	);
};

export default AuthorList;
