import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';
import { clearSearch } from '../actions/search_actions'
import NavBar from './nav_bar';

const mapStateToProps = state => {
    return ({
        currentUser: state.entities.users[state.session.currentUserId],
        current_search: state.ui.current_search    
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        logout: () => dispatch(logout()),
        clearSearch: () => dispatch(clearSearch())
    })

}
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);