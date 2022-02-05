//SPDX-License-Identifier: UNLICENCED
pragma solidity ^0.8.0;
import "./Interfaces/IMetadata.sol";
import "./Interfaces/ICounter.sol";

contract CryptoMutant is IMetadata, ICounter {
    address private admin;
    uint256 private TxCount;
    bool isContractMature;
    string public contractName;
    uint256 public maturityAge; //should we precise the visibility of this variable to the students ?
    
    constructor(uint256 _maturityAge) {
        admin = msg.sender;
        TxCount = 1;
        require(_maturityAge >= 21, "in constructor: The maturity Age is too low");
        maturityAge = _maturityAge;
    }
    
    modifier onlyAdmin(){
        require(msg.sender == admin, "You are not the admin of the contract");
        _;
    }
    
    function isMature() public view returns(bool) {
        return (isContractMature == true); //Or return (isContractMature) Or return(TxCount >= maturityAge)
    }
    
    function avadakedabra(string calldata _magicWord) external {
        require(bytes(_magicWord).length <= 42, "in avadakedabra: the string provided is too long");
        if (isCryptonicTime(_magicWord, block.timestamp)){
            TxCount += 10;
        }
        else TxCount++;
        if (TxCount >= maturityAge)
            isContractMature = true;
    }
    
    function isCryptonicTime(string memory _magicString, uint256 _currentTime) internal pure returns(bool){
        return ((_currentTime - bytes(_magicString).length) % 2 != 0);
    }
    
    function resetMaturity() public {
        TxCount =  1;
        if (isContractMature)
            isContractMature = false;
    }

    function getContractName() external view override returns(string memory) {
        return contractName;
    }

    function setContractName(string memory _newContractName) external override {
        contractName = _newContractName;
    }
    
    function getTxCount() external view override returns (uint256){
        return TxCount;
    }
}