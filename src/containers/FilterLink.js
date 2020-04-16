import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import Link from '../components/Link';

const mapState2Props = (state, ownProps) => ({
    active: ownProps.filter === state.visibilityFilter
});

const mapDispatch2Props = (dispatch, ownProps) => ({
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
});

export default connect(mapState2Props, mapDispatch2Props)(Link);
