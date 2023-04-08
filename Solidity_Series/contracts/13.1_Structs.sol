// Declaring and importing Struct

// !File that the struct is declared in

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;
// File: 'StructDeclaration.sol'

struct Todo {
    string text;
    bool completed;
}


// !File that imports the struct above

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "./StructDeclaration.sol";

contract Todos {
    // An array of 'Todo' structs
    Todo[] public todos;
}
