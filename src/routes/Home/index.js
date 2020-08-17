import { connect } from 'react-redux';
import {
	searchPublication,
	setSortBy,
} from '../../store/publications/actionCreators';
import { getSortBy } from '../../store/publications/selectors';
import Home from './Home';

const mapStateToProps = (state) => ({
	sortBy: getSortBy(state),
});
const mapDispatchToProps = {
	searchPublication,
	setSortBy,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
