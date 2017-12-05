/*
Distributed key generation library for
javascript and for web plug-ins


Required imports
 -bigInt
 -ElGamal
 -polynomialoperator
*/

import elgamal from 'ELGamal'
import poly from 'polynomialoperator' 
var bigInt = require("big-integer");


/*
Variables used throughout the function
*/

//could you have a list of shared secrets
//could you have a list of encrypted secrets that specific people can see


/* Initialize the encryption scheme (in this ELGamal) this creates:
  -a large prime to serve as the order of the group
  -a generator for the prime group
*/
function create() {
  prime_order, factor = elgamal.randomPrime(256);
  generator = elgamal.groupGenerator(prime_order, factor);
  return prime_order, generator;
}


/*
Get a public and private key from the el gamal function
*/
function getKeys(prime_order, generator) {
  return elgamal.generatePublicPrivateKey(prime_order, generator);
}

/*
Encrypt a point of the function with someone's el gamal address and sign it
*/
function encrypt(m, pub_key, private_key, prime_order, generator) {
  return elgamal.encrypt(m, pub_key, private_key, prime_order, generator);
}


/*
Decrypt a point of a function with someone's el gamal address that is signed
*/
function decrypt(c, d, s, r, private_key, prime) {

  return elgamal.decrypt(c, d, s, r, private_key, prime);
}


/*
Create a random polynomial of order t-1 in mod p
with the x_0 component being the secret key
*/
//polynomialoperator



/*
Create a set of points in the polynomial (shared secrets),
and then create g^xi of points
*/
//polynomialoperator

/*
Validate a point on polynomials
Input: shared_secrets,
*/
//polyfunctions create a polynomial that gives the secret key

/*
Polynomial interpolation mod p (given t+1 points on the polynomial
it is possible to uniquely distinguish it
*/
//polynomialoperator
