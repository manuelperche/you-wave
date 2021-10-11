// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;
import "hardhat/console.sol";

contract YouWave {
    uint256 totalWaves;

    constructor() {
        console.log("Testing smart contract");
    }

    function wave() public {
        totalWaves += 1;
        console.log("%s sent you a video!", msg.sender);
    }

    function getTotalWaves() public view returns (uint256) {
        console.log("We've got %d total videos", totalWaves);
        return totalWaves;
    }
}
