import { connect } from 'react-redux';
import { fetchPublications } from '../../store/publications/actionCreators';
import {
	getPublicationErrors,
	getPublicationsData,
	getPublicationsLoading,
} from '../../store/publications/selectors';
import PublicationList from './PublicationList';

const mapStateToProps = (state) => ({
	loading: getPublicationsLoading(state),
	publications: getPublicationsData(state),
	errors: getPublicationErrors(state),
});

const mapDispatchToProps = {
	fetchPublications,
};

export default connect(mapStateToProps, mapDispatchToProps)(PublicationList);
