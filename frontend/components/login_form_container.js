import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login } from '../actions/session_actions';

const mapStateToProps = state => {
    return ({
        errors: state.errors.sessionErrors,
        formType: 'Sign In',
        otherType: '/signup',
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        processForm: (user) => dispatch(login(user))
    });
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SessionForm);