import React from 'react';
import footer from './images/footer_logo.png';

function Footer(){
    return(
        <div className="footer">
            <div className="inner-footer">
                <span>
                    <img src={footer} className="logo"/>
                </span>
                <span className="shortcut">
                    <a className="end" href="">TERMS OF USE</a>
                    <a className="end" href="">LEGAL NOTICES</a>
                    <a className="end" href="">PRIVACY POLICY</a>
                    <a className="end" href="">STAR WARS HELPDESK</a>
                    <a className="end" href="">STAR WARS AI DISNEY STORE</a>
                </span>
            </div>
            <div className="outer-footer">TM &copy Lucasfilm ltd. All Rights Reserved</div>
        </div>
    )
        
}

export default Footer;