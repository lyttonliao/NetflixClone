import { connect } from 'react-redux';
import List from './list';
import { withRouter } from 'react-router-dom';
import { fetchList } from '../../actions/list_actions';

const msp = (state, ownProps) => {
    const currentUserId = this.state.session.currentUserId;
    return ({
        list: state.entities.lists[currentUserId]
    })
}

const mdp = dispatch => {
    return ({
        fetchList: (id) => dispatch(fetchList(id))
    })
}

export default withRouter(connect(msp, mdp)(List));