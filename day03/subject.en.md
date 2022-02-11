Pour cette journée, nous allons nous amuser à recréer quelques concepts de finance.

Que diriez-vous de développer une pyramide de Ponzi ?

Consignes:



Grace à un mapping d'address vers uint, vous enregistrerez les performances des membres.
Tous les 2 nouveaux investisseurs, un parrain pourra retirer 200 eth grâce à une méthode nommée withdraw qui sera external et qui ne prendra aucun arguments.

Votre code sera soumis à des attaques de re-entrency.



# Exercise 00 - Ponzi

 _<div style= "text-align:center">"Coucou"</div>_

|                         |                    |
| -----------------------:| ------------------ |
|   Turn-in directory:    |  ex00              |
|   Files to turn in:     |  Ponzi.sol  |
|   Forbidden functions:  |  None              |
|   Remarks:              |  Keep Calm and [RTFM](https://docs.soliditylang.org/en/latest/index.html). Don't forget to follow the white rabbit               |

Create a smart contract named "**Ponzi**" which:

- has a private variable called **owner** and of type address. It's value will be set at the creation of the contract to equal creator address.

- implements a constructor that require a paiment of 100 eth.

- implements an external method **invest**, requiring a 100 eth paiement and taking an address has argument. This address is the address of the sponsor.
    this method will be protected by the modifier "isInvestor" that will require the sponsor to be an investor. If it's not the case, the message reverted must be:"Sponsor not valid".

- investors address must not be publicly stored.

- implements a **withdraw** method that will let an investor withdraw 200 eth one time if he brought 2 investors to the ponzi.
- Create a variable called  '**maturityAge**'  which will store this minimal number of transactions for the contract to be mature. The maturity age should be at least equal to 21. The **maturityAge** should be set as a parameter during contract creation[🐇](https://docs.soliditylang.org/en/latest/contracts.html#constructor);

- implements an internal function [🐇](https://docs.soliditylang.org/en/latest/contracts.html#constructor); called **isCryptonicTime** which takes a string and a time as parameters and returns `true` if this time is cryptonic.

>_We will qualify a time as cryptonic if the current time minus the length of the string passed in parameter of the function is an odd number._

- implements an external function called '**reinforce**' which takes a string in parameter and increases the **experience** variable as follows:

    **experience** is increased by 10 if this function is invoked at a cryptonic time. The string given in parameter is [**required 🐇**](https://docs.soliditylang.org/en/latest/control-structures.html#error-handling-assert-require-revert-and-exceptions) to be at most 42 characters wide, otherwise the fonction reverts.

    **experience** is increased by 1 if the invokation time is not cryptonic

- implements the function '**resetMaturity'** function which sets the 'experience' variable to 1 and the 'isMature' variable to false. This function should be protected so that only the admin of the contract can perform this action.


