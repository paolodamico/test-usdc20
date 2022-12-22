// contracts/TestUSDC20.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TestUSDC20 is ERC20 {
    constructor(uint256 initialSupply) ERC20("Test USDC ERC20 token", "TSTUSDC") {
        _mint(msg.sender, initialSupply);
    }
}