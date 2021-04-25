import React from 'react';
import Logo from '../Homepage/logo';
import Footer from '../Homepage/footer';
import Navbar from './navbar';
import List from './list';

const Nextpage = ({match}) => {
    return (
        <div className = "nextpage">
            <Logo />
            <div className="holder">
                <Navbar name={match} />
                <List info={match}/>
            </div>
            <Footer/>
        </div>
    )
}
export default Nextpage;