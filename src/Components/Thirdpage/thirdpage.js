import React from 'react';
import Logo from '../Logo/logo';
import Footer from '../Footer/footer';
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