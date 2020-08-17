import { connect } from 'react-redux';
import { selectAuthor } from '../../store/authors/actionCreators';
import { getSelectedAuthor } from '../../store/authors/selectors';
import Author from './Author';

const mapStateToProps = (state) => ({
	selectedAuthor: getSelectedAuthor(state),
});

const mapDispatchToProps = {
	selectAuthor,
};

export default connect(mapStateToProps, mapDispatchToProps)(Author);
