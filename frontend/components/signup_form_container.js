import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../actions/session_actions';

const mapStateToProps = state => {
    return ({
        errors: state.errors.sessionErrors,
        formType: 'Sign Up',
        otherType: '/login',
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        processForm: (user) => dispatch(signup(user))
    });
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SessionForm);