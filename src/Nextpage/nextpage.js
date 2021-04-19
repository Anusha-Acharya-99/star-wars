import React from 'react';
import Logo from '../Homepage/logo';
import Footer from '../Homepage/footer';
import Navbar from './navbar';

const Nextpage = ({match}) => {
    console.log({match});
    return (
        <div className = "nextpage">
            <Logo />
            <div className="holder">
                <Navbar name={match} />
            </div>
            <Footer/>
        </div>
    )
}
export default Nextpage;