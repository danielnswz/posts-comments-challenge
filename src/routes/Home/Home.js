import React, { useState, useEffect } from 'react';
import { Grid, Input, Button } from '@material-ui/core';
import AuthorList from '../../components/AuthorList';
import PublicationList from '../../components/PublicationList';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import SearchIcon from '@material-ui/icons/Search';

const Home = ({ searchPublication, sortBy, setSortBy }) => {
	const [searchTerms, setSearchTerms] = useState('');

	useEffect(() => {
		const delayDebounceFn = setTimeout(() => {
			searchPublication({ searchTerms });
		}, 1000);

		return () => clearTimeout(delayDebounceFn);
	}, [searchPublication, searchTerms]);

	return (
		<>
			<Grid
				container
				direction='row'
				justify='center'
				alignItems='center'
				spacing={2}
				style={{ marginBottom: 10 }}
			>
				<Grid item>
					<Input
						id='search	'
						label='Search'
						variant='standard'
						endAdornment={<SearchIcon />}
						onChange={(e) => setSearchTerms(e.target.value.toLocaleLowerCase())}
					/>
				</Grid>
				<Grid item>
					<Button
						variant='contained'
						color='default'
						endIcon={
							sortBy === 'desc' ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />
						}
						onClick={(e) => {
							sortBy === 'desc'
								? setSortBy({ sortBy: 'asc' })
								: setSortBy({ sortBy: 'desc' });
						}}
					>
						Sort by date
					</Button>
				</Grid>
			</Grid>
			<Grid
				container
				direction='row'
				justify='flex-start'
				alignItems='flex-start'
			>
				<AuthorList />

				<PublicationList />
			</Grid>
		</>
	);
};

export default Home;
