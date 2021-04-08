import React from 'react';
import footer from './images/footer_logo.png';
import {Link} from 'react-router-dom';

function Footer(){
    return(
        <div className="footer">
            <div className="inner-footer">
                <span>
                    <img src={footer} className="endlogo"/>
                </span>
                <span className="shortcut">
                    <Link className="end" to = "termsofuse">TERMS OF USE</Link>
                    <Link className="end" to = "legalnotices">LEGAL NOTICES</Link>
                    <Link className="end" to = "privacypolicy">PRIVACY POLICY</Link>
                    <Link className="end" to = "helpdesk">STAR WARS HELPDESK</Link>
                    <Link className="end" to = "disneystore">STAR WARS AI DISNEY STORE</Link>
                </span>
            </div>
            <div className="outer-footer">TM &copy Lucasfilm ltd. All Rights Reserved</div>
        </div>
    )
        
}

export default Footer;