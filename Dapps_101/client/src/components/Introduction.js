import React from 'react';
import {Image} from 'semantic-ui-react';
import * as Logo from '../ressources/42BClogo.png';

const Intro = () => {
    return (
        <div className="Introduction">
            <div className="App-header">
                Ethereum Blockchain BootCamp - 0x01
            </div>
            <Image
            centered
            src = {Logo}
            size="small"
            />
            <h2>Hello Peers !</h2>
             <h3><p>Welcome to this very first Ethereum Blockchain bootcamp, by 42 blockchain</p>
                <p>This bootcamp is designed for absolute beginners.</p>
                <p>You will progressively be introduced to the ethereum blockchain ecosystem.</p>
            </h3> 
        </div>
    )
}

export default Intro;