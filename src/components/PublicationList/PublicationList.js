import React from 'react';
import Publication from '../Publication';
import { Grid } from '@material-ui/core';
import Error from '../Error';

const PublicationList = ({ loading, publications, errors }) => {
	return (
		<Grid item md={8} lg={8}>
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
					<Error errors={errors} />
					{!errors.length &&
						(loading
							? Array.from(new Array(3))
							: publications
						).map((publication, index) => (
							<Publication
								loading={loading}
								publication={publication}
								key={publication ? publication.id : index}
							/>
						))}
				</Grid>
			</div>
		</Grid>
	);
};

export default PublicationList;
