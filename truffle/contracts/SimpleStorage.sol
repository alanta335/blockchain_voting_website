// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract SimpleStorage {
  uint256 value;
  uint256 value1;
  uint256 value2;

  function read() public view returns (uint256) {
    return value;
  }
function read1() public view returns (uint256) {
    return value1;
  }
function read2() public view returns (uint256) {
    return value2;
  }

  function vote() public {
    value = value+1;
  }
  function vote1() public {
    value1 = value1+1;
  }
  function vote2() public {
    value2 = value2+1;
  }
}
