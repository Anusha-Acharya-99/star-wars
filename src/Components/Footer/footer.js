import React from 'react';
import footer from '../../Images/footer_logo.png';
import {Link} from 'react-router-dom';
import './footer.css'

function Footer(){
    return(
        <div className="footer">
            <div className="border"></div>
            <div className="footer1">
                    <img src={footer} className="endlogo"/>
                <span className="shortcut">
                    <Link className="end" to = "termsofuse">TERMS OF USE</Link>
                    <Link className="end" to = "legalnotices">LEGAL NOTICES</Link>
                    <Link className="end" to = "privacypolicy">PRIVACY POLICY</Link>
                    <Link className="end" to = "helpdesk">STAR WARS HELPDESK</Link>
                    <Link className="end" to = "disneystore">STAR WARS AI DISNEY STORE</Link>
                </span>
            </div>
            <div className="footer2">TM &copy Lucasfilm ltd. All Rights Reserved</div>
        </div>
    )
        
}

export default Footer;