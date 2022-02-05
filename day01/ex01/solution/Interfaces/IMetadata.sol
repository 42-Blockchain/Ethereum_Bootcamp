//SPDX-License-Identifier: UNLICENCED
pragma solidity ^0.8.0;

interface IMetadata {
    function getContractName() external view returns(string memory);
    function setContractName(string calldata _newContractName) external;
}