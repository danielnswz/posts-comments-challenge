import { connect } from 'react-redux';
import PublicationDetail from './PublicationDetail';
import { getSelectedPublication } from '../../store/publications/selectors';
import { fetchSelectedPublication } from '../../store/publications/actionCreators';

const mapStateToProps = (state) => ({
	publication: getSelectedPublication(state),
});

const mapDispatchToProps = {
	fetchSelectedPublication,
};

export default connect(mapStateToProps, mapDispatchToProps)(PublicationDetail);
