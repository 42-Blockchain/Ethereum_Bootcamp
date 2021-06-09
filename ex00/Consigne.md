# Exercise 00 - CryptoMutant

|                         |                    |
| -----------------------:| ------------------ |
|   Turn-in directory:    |  ex00              |
|   Files to turn in:     |  CryproMutant.sol  |
|   Forbidden functions:  |  None              |
|   Remarks:              |  follow the white unicorn               |

Create a smart contract named "**CryptoMutant"** which:

- declares a private state variable[🦄](https://ethereum.stackexchange.com/questions/25554/local-variable-and-state-variable-and-the-difference-between-them/25556) labelled '**TxCount**' aiming to store the number of transactions[🦄](https://ethereum.stackexchange.com/questions/765/what-is-the-difference-between-a-transaction-and-a-call#:~:text=transactions%20are%20created%20by%20your,which%20alone%20evaluates%20the%20result.) ****which occurred in this smart contract (Tip: Follow the white crypto-unicorn). This variable should be initialized at 1 when the contract is build. This variable must be incremented each time a transaction is run on the contract;
- implements the function '**isMature**' which returns **true** if the contract has reached its maturity. A contract is considered to be mature if and only if the minimal number of transactions run on that contract has been reached. This minimal number  is called '**maturityAge**' and should be at least equal to 21. The **maturityAge** should be set as a parameter during ****contract creation[🦄](https://docs.soliditylang.org/en/latest/contracts.html#constructor);
- sets a public state variable labelled 'isContractMature' to ***true*** when the 'TxCount' variable reaches **maturityAge;**
- implements an external function called '**avadakedabra**' which takes a string in parameter and increases the **TxCount** variable as follows:

    **TxCount** is increased by 10 if this function is invoked at a cryptonic time. A time is said to be cryptonic if the current time minus the length of the string passed in parameter of the function is an odd number. The string given in parameter is [**required**](https://docs.soliditylang.org/en/latest/control-structures.html#error-handling-assert-require-revert-and-exceptions)🦄 to be at most 42 characters wide, otherwise the fonction reverts.

    **TxCount** is increased by 1 if the invokation time is not cryptonic

- implements the function '**resetMaturity'** function which sets the 'TxCount' variable to 1 and the 'isMature' variable to false. This function should be protected so that only the admin of the contract can perform this action.
