import React from 'react';
import image from './images/background.png';
import Logo from './logo.js';
import Icons from './icons.js';
import Footer from './footer.js'
import './App.css';

function App(){
  return(
    <div style = {{backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition :'center',
        width : '100vw',
        height : '100vh',
      }}>
        <Logo/>
        <Icons/>
        <Footer/>

    </div>
  );
}

export default App;