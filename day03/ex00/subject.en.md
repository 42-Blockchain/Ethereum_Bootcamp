# Exercise 00 - Ponzi

notions vues : modifier, payable address, rentrency

 _<div style= "text-align:center">"Coucou"</div>_

|                         |                    |
| -----------------------:| ------------------ |
|   Turn-in directory:    |  ex00              |
|   Files to turn in:     |  Ponzi.sol  |
|   Forbidden functions:  |  openzeppelin Ownable contract     |
|   Remarks:              |  Keep Calm and [RTFM](https://docs.soliditylang.org/en/latest/index.html). Don't forget to follow the white rabbit               |

Create a smart contract named "**Ponzi**" which:

- has a private variable called **owner** and of type address. It's value will be set at the creation of the contract to equal the creator address.

- implements a constructor that require a paiment of 100 eth.

- implements two modifiers, isInvestor and isOwner, that will require the address given as argument is respectively an investor and the owner. If it's not the

    case the revert message must be explicit.

- implements an external method **invest**, requiring a 100 eth paiement and taking an address has argument. This address is the address of the sponsor.
    this method will be protected by the modifier "isInvestor". 

- investors addresses must not be publicly stored.

- investors should be able to withdraw 200 eth every time they sponsor 2 new investors. Be carefule of reentrency attacks.


