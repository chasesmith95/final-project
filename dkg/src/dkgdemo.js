import DKG from "../js-src/polynomialoperator.js";
import ElGamal from "../js-src/polynomialoperator.js";
import polynomialoperator from "../js-src/polynomialoperator.js";

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Distributed Key Generation</h1>
          <h2 className ="App-subtitle"><i>A solution to on-chain randomness</i></h2>

          <button onClick={this.demo}className = "button demo-button">Demo</button>
          <button onClick={this.demo} className = "button docs-button">Docs</button>
      </header>

        <div className = "About">
          <h2>About</h2>
          <p className="App-intro">
          Randomness is known to be notoriously difficult to create on the blockchain.
          No matter the source of randomness, no matter the commitment scheme involved,
          or staking mechanism there is no version of randomness that can guarantee that
          every request for randomness will be completed without bias. The bias that occurs
           in these failed operations is essentially the bias of the last committer. In every
           decentralized method for randomness, the last committer will always have the ability
           to precompute the answer on the blockchain and decided whether or not they want to commit
           it. This poses a problem not only in the elegance of randomness, but also with the methods
           of fixing this (i.e. staking) which creates an oligarchy of individuals that have enough
            money to choose the bits of randomness. 

          </p>
        </div>

        <hr/>

        <div className ="Images">
         <p> This creates security, prevents front-running, open to the public </p>
        </div>

        <hr/>

        <div className = "Issues">
          <h2> Issues </h2>
         <p> There are many issues with how the system currently works... </p>
        </div>

      </div>
    );
  }
}

export default DKGDemo;
