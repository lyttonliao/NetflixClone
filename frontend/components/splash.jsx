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

            {/* <footer>
                <div className="social-media-icons">
                    <a href="https://github.com/lyttonliao" target="_blank"><i className="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/lytton-liao-55556710b" target="_blank"><i className="fab fa-linkedin"></i></a>
                    <a href="https://www.linkedin.com/in/lytton-liao-55556710b" target="_blank"><i className="fab fa-angellist"></i></a>
                </div>

                <div className="personal-info">
                    <p>Created by Lytton Liao</p>
                </div>

                <div className="personal-info">
                    <a href="mailto:lytton.liao@gmail.com"><p>Email: lytton.liao@gmail.com</p></a>
                </div>

                <div className="personal-site">
                    <a href="https://lyttonliao.github.io" target="_blank"><p>Personal Site</p></a>
                </div>

                <div className="copyright">
                    <p>© 2019 Flixit, Inc.</p>
                </div>
            </footer> */}
        </div>
    )
}

export default Splash;