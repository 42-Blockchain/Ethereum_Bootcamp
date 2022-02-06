# Exercise 00 - SentientProgram

 _<div style= "text-align:center">"Buckle your seatBelt, Dorothy, cause Kansas is going Bye-Bye !"</div>_

|                         |                    |
| -----------------------:| ------------------ |
|   Turn-in directory:    |  ex00              |
|   Files to turn in:     |  SentientProgram.sol  |
|   Forbidden functions:  |  None              |
|   Remarks:              |  Keep Calm and [RTFM](https://docs.soliditylang.org/en/latest/index.html). Don't forget to follow the white rabbit               |

Create a smart contract named "**SentientProgram"** which:

- declares a ***private state*** variable[🐇](https://ethereum.stackexchange.com/questions/25554/local-variable-and-state-variable-and-the-difference-between-them/25556) labelled '**experience**', aiming to keep track of the number of all transactions[🐇](https://ethereum.stackexchange.com/questions/765/what-is-the-difference-between-a-transaction-and-a-call#:~:text=transactions%20are%20created%20by%20your,which%20alone%20evaluates%20the%20result.) occurring in this smart contract (Tip: Follow the white rabbit). This variable should be initialized at 1 ***when the contract is build***. This variable must be incremented each time a transaction is ran on the contract;

- implements the function '**isMature**' which returns **true** if the contract has reached its maturity. 

>_The contract will be considered as mature if and only if the minimal number of transactions ran on that contract has been reached._

- Create a variable called  '**maturityAge**'  which will store this minimal number of transactions for the contract to be mature. The maturity age should be at least equal to 21. The **maturityAge** should be set as a parameter during contract creation[🐇](https://docs.soliditylang.org/en/latest/contracts.html#constructor);

- implements an internal function [🐇](https://docs.soliditylang.org/en/latest/contracts.html#constructor); called **isCryptonicTime** which takes a string and a time as parameters and returns `true` if this time is cryptonic.

>_We will qualify a time as cryptonic if the current time minus the length of the string passed in parameter of the function is an odd number._

- implements an external function called '**reinforce**' which takes a string in parameter and increases the **experience** variable as follows:

    **experience** is increased by 10 if this function is invoked at a cryptonic time. The string given in parameter is [**required 🐇**](https://docs.soliditylang.org/en/latest/control-structures.html#error-handling-assert-require-revert-and-exceptions) to be at most 42 characters wide, otherwise the fonction reverts.

    **experience** is increased by 1 if the invokation time is not cryptonic

- implements the function '**resetMaturity'** function which sets the 'experience' variable to 1 and the 'isMature' variable to false. This function should be protected so that only the admin of the contract can perform this action.
