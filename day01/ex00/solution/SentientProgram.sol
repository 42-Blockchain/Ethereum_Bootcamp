//SPDX-License-Identifier: UNLICENCED
pragma solidity ^0.8.0;

contract SentientProgram {
    address private admin;
    uint256 private experience;
    bool isContractMature;
    string public contractName;
    uint256 public maturityAge; //should we precise the visibility of this variable to the students ?
    
    constructor(uint256 _maturityAge) {
        admin = msg.sender;
        experience = 1;
        require(_maturityAge >= 21, "in constructor: The maturity Age is too low");
        maturityAge = _maturityAge;
    }
    
    modifier onlyAdmin(){
        require(msg.sender == admin, "You are not the admin of the contract");
        _;
    }
    
    function isMature() public view returns(bool) {
        return (isContractMature == true); //Or return (isContractMature) Or return(experience >= maturityAge)
    }
    
    function reinforce(string calldata _magicWord) external {
        require(bytes(_magicWord).length <= 42, "string too long");
        if (isCryptonicTime(_magicWord, block.timestamp)){
            experience += 10;
        }
        else experience++;
        if (experience >= maturityAge)
            isContractMature = true;
    }
    
    function isCryptonicTime(string memory _magicString, uint256 _currentTime) internal pure returns(bool){
        return ((_currentTime - bytes(_magicString).length) % 2 != 0);
    }
    
    function resetMaturity() public onlyAdmin {
        experience =  1;
        if (isContractMature)
            isContractMature = false;
    }
}