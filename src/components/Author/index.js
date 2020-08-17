import Author from './Author';
import { connect } from 'react-redux';
import { selectAuthor } from '../../store/authors/actionCreators';
import { getSelectedAuthor } from '../../store/authors/selectors';

const mapStateToProps = (state) => ({
	selectedAuthor: getSelectedAuthor(state),
});

const mapDispatchToProps = {
	selectAuthor,
};

export default connect(mapStateToProps, mapDispatchToProps)(Author);
