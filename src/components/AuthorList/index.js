import { connect } from 'react-redux';
import { fetchAuthors } from '../../store/authors/actionCreators';
import {
	getAuthorLoading,
	getAuthorsData,
} from '../../store/authors/selectors';
import AuthorList from './AuthorList';

const mapStateToProps = (state) => ({
	loading: getAuthorLoading(state),
	authors: getAuthorsData(state),
});

const mapDispatchToProps = {
	fetchAuthors,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthorList);
