

/*
The DKGNode acts as a carrier of information, the validator, and ...

*/

contract DKGNode {

  address creator; //this is the contract that creates it
  address owner;
  //given to it by creator
  uint256 prime;
  uint degree;
  uint256 g;
	uint limit;
  //

  //extras
  bool isStaked;


  address pubkey; //public key
  //mapping for values
  


  /*
  Check if it has an owner
  */
  function hasOwner() {
    return owner != 0;
  }

  /*
  Check if it has a pubkey
  */
  function hasPubKey() {
    return pubkey != 0;
  }





}
