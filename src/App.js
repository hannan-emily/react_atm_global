import React, { Component } from 'react';
import logo from './ga.png';

import Account from './Account';
import SavingsAccount from './SavingsAccount'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkingBalance: 0,
      savingBalance: 0
    }
    this.handleDepositClick = this.handleDepositClick.bind(this)
    this.handleWithdrawClick = this.handleWithdrawClick.bind(this)
    this.handleTransferClick = this.handleTransferClick.bind(this)
  }


  handleDepositClick(e, amount, name) {
    e.preventDefault();
    if (isNaN(amount)) {
      console.log("Not a number");
    }
    else {
      let amount = amount;
      let newBalance = 0;
      if (name === "checking") {
        newBalance = +this.state.checkingBalance + amount
        this.setState ({
          checkingBalance: newBalance
        })
      } else {
        newBalance = +this.state.savingBalance + amount
        this.setState ({
          savingBalance: newBalance
        })
      }
      this.refs.amount.value = '';
    }
  }


  handleWithdrawClick(e, amount, name) {
    e.preventDefault();
    if (isNaN(amount)) {
      console.log("Not a number");
    }
    else {
      let amount = amount;
      let newBalance = 0;
      if (name === "checking") {
        newBalance = this.state.checkingBalance - amount
        this.setState ({
          checkingBalance: newBalance
        })
      } else {
        newBalance = this.state.savingBalance - amount
        this.setState ({
          savingBalance: newBalance
        })
      }
      this.refs.amount.value = '';
    }
  }

  handleTransferClick(e, amount, name) {
    e.preventDefault();
  }

  render() {
    return (
      <div id="content">
        <div id="nav">
          <div id="logo"><img src={logo} alt="General Assembly logo" /></div>
          <div id="title">Bank of GA</div>
        </div>

        <Account name="Checking"
          balance={this.state.checkingBalance}
          handleWithdrawClick={this.handleWithdrawClick}
          handleDepositClick={this.handleDepositClick}
          transfer={this.state.transferChecking}
          handleTransferClick={this.handleTransferClick}/>

        <SavingsAccount name="Savings"
          balance={this.state.savingBalance}
          handleWithdrawClick={this.handleWithdrawClick}
          handleDepositClick={this.handleDepositClick}
          transfer={this.state.transferChecking}
          handleTransferClick={this.handleTransferClick}/>

        <div className="clear"></div>
      </div>
    );
  }
}

export default App;
