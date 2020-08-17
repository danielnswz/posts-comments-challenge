import { connect } from 'react-redux';
import PublicationList from './PublicationList';
import {
	getPublicationsLoading,
	getPublicationsData,
	getPublicationErrors,
} from '../../store/publications/selectors';
import { fetchPublications } from '../../store/publications/actionCreators';

const mapStateToProps = (state) => ({
	loading: getPublicationsLoading(state),
	publications: getPublicationsData(state),
	errors: getPublicationErrors(state),
});

const mapDispatchToProps = {
	fetchPublications,
};

export default connect(mapStateToProps, mapDispatchToProps)(PublicationList);
