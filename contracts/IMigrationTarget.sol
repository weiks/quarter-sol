// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

//
// Migration target
// @dev Implement this interface to make migration target
//
interface IMigrationTarget {
  function migrateFrom(address _from, uint256 _amount, uint256 _rewards, uint256 _trueBuy, bool _devStatus) external;
}
