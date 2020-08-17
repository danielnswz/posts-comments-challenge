import { connect } from 'react-redux';
import AuthorList from './AuthorList';
import {
	getAuthorLoading,
	getAuthorsData,
} from '../../store/authors/selectors';
import { fetchAuthors } from '../../store/authors/actionCreators';

const mapStateToProps = (state) => ({
	loading: getAuthorLoading(state),
	authors: getAuthorsData(state),
});

const mapDispatchToProps = {
	fetchAuthors,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthorList);
