// !Declaring and importing Enum

// !File that the enum is declared in


//File: EnumDeclaration.sol
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;
// This is saved 'EnumDeclaration.sol'

enum Status {
    Pending,
    Shipped,
    Accepted,
    Rejected,
    Canceled
}


//TODO -- Important --
// !File that imports the enum above

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "./EnumDeclaration.sol";   //file path in which you declare enum

contract Enum {
    Status public status;
}


