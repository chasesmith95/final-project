

/*
The DKGNode acts as a carrier of information, the validator, and ...

*/

contract DKGNode {
  //can have a staking mechanism
  address creator; //this is the contract that creates it
  address owner;
  address pubkey;
  bool staking;
  uint256 prime;
  uint degree;


}
