import React from 'react';
import Logo from '../Logo/logo';
import Footer from '../Footer/footer';
import Navbar from './Navbar/navbar';
import List from './List/list';

const Nextpage = ({match}) => {
    return (
        <div className = "nextpage">
            <Logo />
            <Navbar name={match} />
            <List info={match}/>
            <Footer/>
        </div>
    )
}
export default Nextpage;