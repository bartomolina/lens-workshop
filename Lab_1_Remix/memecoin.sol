// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

contract Token {
    uint256 public totalSupply;
    string public name = "Bart";
    string public symbol = "BRT";
    uint8 public decimals = 18;

    mapping(address => uint256) balances;

    event Transfer(address indexed from, address indexed to, uint256);

    function balanceOf(address _address) external view returns(uint256) {
        return balances[_address];
    }

    function transfer(address receiver, uint256 value) public returns(bool) {
        require(balances[msg.sender] >= value);
        balances[msg.sender] -= value;
        balances[receiver] += value;

        emit Transfer(msg.sender, receiver, value);

        return true;
    }

    constructor() {
        totalSupply = 1000000000 * 10 ** 18;
        balances[msg.sender] = totalSupply;
    }
}