import React from 'react';
import { Link } from 'react-router-dom';

const Splash = () => {
    return (
        <div className="splashPage">
            <div className="frontPageHeader">
                {/* <img className="fp-logo" src={window.logo} alt="Flixit Image"/> */}
                <Link className="auth-fp-login" to={"/login"}>Sign In</Link>
            </div>
            {/* <img className="fpImage" src={fPImage} alt="Front Page Image"/> */}

            <div className="frontPageCreative">
                <p className="fp-p1">See what's next.</p>
                <p className="fp-p2">WATCH ANYWHERE. CANCEL ANYTIME.</p>
                <Link className="auth-fp-signup" to={"/signup"}>Watch Free For 30 Days ></Link>
            </div>
        </div>
    )
}

export default Splash;