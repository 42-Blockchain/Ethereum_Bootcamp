import React from 'react';
import {Image, Segment, Icon} from 'semantic-ui-react';
import * as Logo from '../ressources/42BClogo.png';

const Intro = ({account}) => {

    const disconnect = async () => {
        console.log("GOOD BYE", window.ethereum);
        await window.ethereum._handleDisconnect("disconnect", "");
    }

    return (
        <div className="Introduction">
            <div className="App-header">
                <div>Ethereum BootCamp</div>
                    {account && <div> 
                        <Segment floated='left' className="Account" textAlign='right' >
                            Wallet : {account} {<Icon onClick={async () => await disconnect()} circular className = "Power-off" name="power off"/>}
                        </Segment></div> ||
                        !account && <div><Segment floated='left' className="Account" textAlign='right' >
                        Disconneted
                    </Segment></div>
                    }
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