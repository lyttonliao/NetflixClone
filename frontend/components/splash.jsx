import React from 'react';
import { Link } from 'react-router-dom';

const Splash = () => {
    return (
        <div className="splashPage">
            <div className="frontPageHeader">
                {/* <Link to="/" className="wordart tilt"><span class="text">FlixiT</span></Link> */}
                {/* <img className="fp-logo" src={window.logo} alt="Flixit Image"/> */}
                <Link className="fp-logo-link" to="/"><img className="fp-logo" src={window.logo} alt="Flixit Image" /></Link>
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