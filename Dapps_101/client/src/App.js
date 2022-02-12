import "./App.css";
import getWeb3 from "./getWeb3";
import 'semantic-ui-css/semantic.min.css';
import DaysList from "./components/DaysList";
import * as Logo from './ressources/42BClogo.png';
import React, { useState, useEffect } from "react";
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import { Segment, Image, Card, Container, CardHeader, CardContent, Divider, Label, Header, Input, Message, Icon} from 'semantic-ui-react';

const App = () => {
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState(null);
  const [contract, setContract] = useState(null);
  const [storageValue, setStorageValue] = useState(0);

  const getWeb3Instane = async () => {
    // Get network provider and web3 instance.
    const _web3 = await getWeb3();
    setWeb3(_web3);
  }

  const getUserAccount = async () => {
    // Use web3 to get the user's accounts.
    const _accounts = await web3.eth.getAccounts();
    setAccounts(_accounts);
  }

  const getContractInstance = async () => {
     // Get the contract instance.
     const networkId = await web3.eth.net.getId();
     const deployedNetwork = SimpleStorageContract.networks[networkId];
     const instance = new web3.eth.Contract(
       SimpleStorageContract.abi,
       deployedNetwork && deployedNetwork.address,
     );
     setContract(instance);
  }

  useEffect(() => {
    getWeb3Instane();
  }, []);

  useEffect(() => {
    if (web3 !== null){
      getUserAccount();
    }
  }, [web3]);

  useEffect(() => {
    if (web3 && accounts){
      getContractInstance();
    }
  }, [web3, accounts]);

  useEffect(() => {
    if (contract && accounts){
    //   runExample();
    console.log("Accounts :: ", accounts)
    }
  }, [web3, contract, accounts]);

  const runExample = async () => {
    try {
      // Stores a given value, 5 by default.
      await contract.methods.set(5).send({ from: accounts[0] });
  
      // Get the value from the contract to prove it worked.
      const response = await contract.methods.get().call();
  
      // Update state with the result.
      setStorageValue(response);
    } catch(error){
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };
  if (!window.ethereum){
    return (
      <Container className="App">
            {/* <DaysList /> */}
            <div className="App-header">
            Ethereum Blockchain BootCamp - 0x01
          </div>
            <Message className="Connection" compact>
              {/* <Icon
              bordered
              circular
              size="large"
              className="power off"
              /> */}
              <h3>Install Metamask wallet to access the Bootcamp</h3>
            </Message>
            {/* <Input /> */}
          </Container>
    )
  }
    if (!web3) {
      // return <div>Loading Web3, accounts, and contract...</div>;
      return (
        <div className="App">
          <div className="App-header">
            Ethereum Blockchain BootCamp - 0x01
          </div>
          <Image
                centered
                src = {Logo}
                // size="medium"
                size="small"
          />
          {/* <Segment raised size="large" textAlign="center"> */}
              <div className="Introduction">
              <h2>Hello Peers !</h2>
             <h3><p>Welcome to this very first Ethereum Blockchain bootcamp, by 42 blockchain</p>
                <p>This bootcamp is designed for absolute beginners.</p>
                 <p>You will progressively be introduced to the ethereum blockchain ecosystem.</p>
                 </h3> 
              </div>
          {/* </Segment> */}
          <Divider/>
          <Container >
            {/* <DaysList /> */}
            <Message className="Connection" compact>
              {/* <Icon
              bordered
              circular
              size="large"
              className="power off"
              /> */}
              <h3>Connect your Metamask wallet to access the Bootcamp</h3>
            </Message>
            {/* <Input /> */}
          </Container>
          <Divider/>

        
      </div>
      )
    }
    return (
      <div className="App">
        <div className="App-header">
          Ethereum Blockchain BootCamp - 0x01
        </div>
          <Image
                centered
                src = {Logo}
                // size="medium"
                size="small"
          />
          {/* <Segment raised size="large" textAlign="center"> */}
              <div className="Introduction">
              <h2>Hello Peers !</h2>
             <h3><p>Welcome to this very first Ethereum Blockchain bootcamp, by 42 blockchain</p>
                <p>This bootcamp is designed for absolute beginners.</p>
                 <p>You will progressively be introduced to the ethereum blockchain ecosystem.</p>
                 </h3> 
              </div>
          {/* </Segment> */}
          <Divider/>
          <Container >
            <DaysList />
          </Container>
          <Divider/>

        
      </div>
    );
}

export default App;
