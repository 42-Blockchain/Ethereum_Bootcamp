# Exercise 01 - Interfaces

|                         |                    |
| -----------------------:| ------------------ |
|   Turn-in directory:    |  ex01              |
|   Files to turn in:     |  CryptoMutant.sol, Interfaces/IConter.sol, Interfaces/IMetadata.sol  |
|   Forbidden functions:  |  None              |
|   Remarks:              |  follow the white unicorn               |

At the root of your working directory, create a folder named "Interfaces"

We provide you with the file **IMetadata.sol** which has the following content :

```jsx
function getTxCount() external returns (uint256);
function setContractName(string calldata _newContractName) external;
```

- Import the IMetadata interface in the `CryptoMutant.sol` file
- Update the smartContract so that it implements the `IMetadata` interface.
- In the Interfaces directory, create a new file named **ICounter.sol**. This file should contain a single interface labelled `getTxCount`, aiming to return the actual `TxCount`.
- Update your `CryptoMutant` contract to make it implement the `ICounter` interface.