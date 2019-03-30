import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    };

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(() => this.props.history.push('/browse'));
    };

    update(field) {
        return (e) => {
            this.setState({[field]: e.target.value});
        };
    };

    renderErrors() {
        if (this.props.errors) {
            return (
                this.props.errors.map(error => {
                    return (<div className="error" key={error}>{error}</div>);
                })
            );
        };
    };



    render() {
        
        let link;
        if (this.props.formType === "Sign In") {
            link = <p className="login-or-signin">New to Netflix? <Link className="login-or-signin-link" to={this.props.otherType}>Sign up now.</Link></p>
        } else if (this.props.formType === "Sign Up") {
            link = <p className="login-or-signin">Already have a Netflix account? <Link className="login-or-signin-link" to={this.props.otherType}>Sign in.</Link></p>
        }

        return (
            <div className="session">
                <div className="frontPageHeader">
                    <Link to="/" className="fp-logo-link"><img className="fp-logo" src={window.logo} alt="Flixit Image"/></Link>
                </div>

                {/* <div className="session-form-container"> */}
                    <div className="session-form-box">
                        <form className="session-form" onSubmit={this.handleSubmit}>
                            <h1 className="session-header">{this.props.formType}</h1>
                            {this.renderErrors()}
                            <label className="session-form-email-label">
                                <input
                                    className="session-form-email-input"
                                    type="email"
                                    onChange={this.update('email')}
                                    placeholder="Email"
                                />
                            </label>
            

                            <label className="session-form-password-label">
                                <input
                                    className="session-form-password-input"
                                    type="password"
                                    onChange={this.update('password')}
                                    placeholder="Password"
                                />
                            </label>

                            <input className="session-form-submit" type="submit" value={this.props.formType} />
                        </form>

                        {link}
                    </div>
                {/* </div> */}
            </div>
        );
    };
};

export default withRouter(SessionForm);