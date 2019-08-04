import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';
import NavBar from './nav_bar';

const mapStateToProps = state => {
    return ({
        currentUser: state.entities.users[state.session.currentUserId],        
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        logout: () => dispatch(logout())
    })

}
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);