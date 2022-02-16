import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { useMetaMask } from "metamask-react";
import DaysList from "./components/DaysList";
import Intro from "./components/Introduction";
import React, { useState, useEffect } from "react";
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import {
  Icon,
  Divider,
  Message,
  Container,
} from 'semantic-ui-react';
import Web3 from "web3";

const App = () => {
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);
  const [metamaskStatus, setMetamaskStatus] = useState(null);
  const { status, chainId, ethereum, connect } = useMetaMask();

  const connectMetamask = async () => {
    if (ethereum && chainId) {
      try {
        if (Number(chainId) !== 0x4) {
          alert(`${chainId} - Switch your metamask network to Rinkeby and reconnect`);
        } else {
          const _web3 = new Web3(ethereum);
          if (_web3) {
            console.log("setting Web3 provider");
            console.log(`Connection on network id ${chainId}... : `, _web3)
            setWeb3(_web3);
          }
          const accounts = await connect();
          setAccount(accounts[0]);
        }
      } catch (error) {
        console.log("There were an error : ", error);
      }
    }
  }

  const getContractInstance = async () => {
    // Get the contract instance.
    const deployedNetwork = SimpleStorageContract.networks[chainId];
    const instance = new web3.eth.Contract(
      SimpleStorageContract.abi,
      deployedNetwork && deployedNetwork.address,
    );
    setContract(instance);
  }  

  useEffect(() => () => {
    if (ethereum){
      ethereum.on('disconnect', () => {
        console.log("Disconnection from metamask .. ");
        setAccount(null);
      });
  
      ethereum.on('chainChanged', (chainId) => {
        console.log('Chain changed ..')
        window.location.reload();
      });
  
      ethereum.on('connect', (infos) => {
        console.log("Metamask is now connected :: ", infos);
      });
    }
  }, [status, ethereum])

  if (metamaskStatus === 'unavailable') {
    return (
      <Container className="App">
        <div className="App-header">
          Ethereum BootCamp
        </div>
        <Message className="Connection" compact>
          <h3>Install Metamask wallet to access the Bootcamp</h3>
        </Message>
      </Container>
    )
  }
  if (status !== 'connected' || !account) {
    return (
      <div className="App">
        <Intro account={account}/>
        <Divider />
        <Container onClick={connectMetamask} >
          <Message compact className="Connection">
            <h3> <Icon name="power off" />
              Start</h3>
          </Message>
        </Container>
        <Divider />
      </div>
    )
  }
  return (
    <div className="App">
      <Intro account={account}/>
      <Divider />
      <Container className="Bootcamp">
        <DaysList />
      </Container>
      <Divider />
    </div>
  );
}

export default App;
