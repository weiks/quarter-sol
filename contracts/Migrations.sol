// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Migrations {
  address public owner;
  uint public last_completed_migration;

  modifier restricted() {
    require(
      msg.sender == owner,
      "This function is restricted to the contract's owner"
    );
    _;
  }
  
  constructor() 
  {
      owner=msg.sender;
  }

  function setCompleted(uint completed) public restricted {
    last_completed_migration = completed;
  }
  
  function upgrade(address new_address) restricted public{
      Migrations upraded = Migrations(new_address);
      upraded.setCompleted(last_completed_migration);
  }
}
