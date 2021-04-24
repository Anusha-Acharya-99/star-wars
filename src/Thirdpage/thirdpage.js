import React from 'react';
import Logo from '../Homepage/logo';
import Footer from '../Homepage/footer';
import Details from './details';

const Thirdpage = ({match}) => {
    return (
        <div>
            <Logo />
            <Details match={match} />
            <Footer/>
        </div>
    )
}

export default Thirdpage;