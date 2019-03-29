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
        this.props.processForm(user).then(() => this.props.history.push('/'));
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
            link = <p className="login-or-signin">New to Netflix? <Link to={this.props.otherType}>Sign up now.</Link></p>
        } else if (this.props.formType === "Sign Up") {
            link = <p className="login-or-signin">Already have a Netflix account? <Link to={this.props.otherType}>Sign in.</Link></p>
        }

        return (
            <div className="session">
                <div className="frontPageHeader">
                    <Link to="/" className="fp-logo-link"><img className="fp-logo" src={window.logo} alt="Flixit Image"/></Link>
                </div>

                <div className="session-form-box">
                    <h1 className="session-header">{this.props.formType}</h1>
                    <form className="session-form" onSubmit={this.handleSubmit}>
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
            </div>
        );
    };
};

export default withRouter(SessionForm);