import "./App.css";
import getWeb3 from "./getWeb3";
import React, { useState, useEffect } from "react";
import SimpleStorageContract from "./contracts/SimpleStorage.json";

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
      runExample();
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
    if (!web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
        <h1>Good to Go!</h1>
        <p>Your Truffle Box is installed and ready.</p>
        <h2>Smart Contract Example</h2>
        <p>
          If your contracts compiled and migrated successfully, below will show
          a stored value of 5 (by default).
        </p>
        <p>
          Try changing the value stored on <strong>line 42</strong> of App.js.
        </p>
        <div>The stored value is: {storageValue}</div>
      </div>
    );
}

export default App;
