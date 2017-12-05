import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {

    return (
      <div className="App">
        <header className="App-header">
        <header className="App-subheader">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Distributed Key Generation</h1>
          <h2 className ="App-subtitle"><i>A solution to on-chain randomness</i></h2>

          <button onClick={this.demo}className = "button demo-button">Demo</button>
          <button onClick={this.demo} className = "button docs-button">Docs</button>
          </header>
      </header>

        <div className = "section">
          <h2>About</h2>
          <p className="App-intro">
          Distributed Key Generation (DKG) is a method to join randomness or keys
          from multiple sources and ensure that there are no individuals that withhold their
          keys. The DKG library is meant to allow any individual to ....
          </p>
        </div>

        <hr/>

        <div className ="section App-intro">
         <ul>
          <li>Creates security</li>
          <li>Prevents front-running</li>
          <li>Open to the public</li>
         </ul>
        </div>

        <hr/>

        <div className = "section">
          <h2>Mission</h2>
          <p>
          Providing a public and open way to dynamically generate on-chain randomness and dynamic encryption.
          </p>
        </div>

        <hr/>

        <div className = "section">
          <h2> Issues with Randomization on the Blockchain </h2>
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

        <div className = "section">
          <h2> Distributed Key Generation </h2>
          <p className="App-intro">
          The solution is to take information from a variety of sources, but to also ensure that
          these individuals can have their randomness "discovered" if they try to withhold it.
          </p>
        </div>

        <hr/>

        <div className = "section">
          <h2> Uses Cases for Distributed Key Generation </h2>
          <p className="App-intro">
          Randomness is not the only thing that DKG can be used for it can also be
          used to dynamically set up ...
          </p>
        </div>

        <hr/>

        <div className = "section">
          <h2>Contact Us </h2>
          <p className="App-intro">
          stuff
          </p>
        </div>
      </div>
    );
  }
}

export default App;
