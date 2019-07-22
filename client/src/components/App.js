import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import logo from '../assets/logo.png';
// import logo from '../assets/vecozo.png';

class App extends Component {
  state = { walletInfo: {} };

  componentDidMount() {
    fetch(`${document.location.origin}/api/wallet-info`)
      .then(response => response.json())
      .then(json => this.setState({ walletInfo: json }));
  }

  render() {
    const { address, balance } = this.state.walletInfo;

    return (
      <div className='App'>
        <div>
          Welkom bij de blockchain DEMO...
        </div>
        <br />
        <div><Link to='/blocks'>Bekijk Blocks in de blockchain</Link></div>
        <div><Link to='/conduct-transaction'>Voer een Transaction uit</Link></div>
        <div><Link to='/transaction-pool'>Bekijk de Transaction Pool</Link></div>
        <br />
        <div className='WalletInfo'>
          <div>Address: {address}</div>
          <div>Balance: {balance}</div>
        </div>
      </div>
    );
  }
}

export default App;