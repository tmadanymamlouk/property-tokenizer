pragma solidity ^0.4.17;

contract Share {
    string public name;
    string public symbol;
    uint8 public decimals = 0;

    /* This creates an array with all balances */
    mapping (address => uint256) public balanceOf;

    /* Initializes contract with initial supply tokens to the creator of the contract */
    function Share(string tokenname, string tokensymbol) public {
        uint32 totalSupply = 1000000;                     // 1 Million
        balanceOf[msg.sender] = totalSupply;              // Give the creator all initial tokens

        name = tokenname;
        symbol = tokensymbol;
    }

    /* Send coins */
    function transfer(address _to, uint256 _value) public {
        require(balanceOf[msg.sender] >= _value);           // Check if the sender has enough
        require(balanceOf[_to] + _value >= balanceOf[_to]); // Check for overflows
        balanceOf[msg.sender] -= _value;                    // Subtract from the sender
        balanceOf[_to] += _value;                           // Add the same to the recipient
    }
}
