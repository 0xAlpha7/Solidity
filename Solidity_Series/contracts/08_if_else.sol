// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract IfElse {
    function test(uint a) public pure returns (uint) {
        if (a < 10) {
            return 0;
        } else if (a < 20) {
            return 1;
        } else {
            return 2;
        }
    }
    function ternaryOP(uint _a) public pure returns (uint) {
        // if (_a < 10) {
        //     return 1;
        // }
        // return 2;

        // shorthand way to write if / else statement
        // the "?" operator is called the ternary operator
        return _a < 10 ? 1 : 2;
    }
}
