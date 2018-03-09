import React, { Component } from 'react';

export default class SavingsAccount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      balance: 0
    }

  }

  render() {
    let balanceClass = 'balance';
    if (this.state.balance === 0) {
      balanceClass += ' zero';
    }

    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className={balanceClass}>${this.state.balance}</div>
        <input type="text" placeholder="enter an amount" ref="amount" />
        <input type="button" value="Deposit" onClick={(e) => this.props.handleDepositClick(e, this.refs.amount.value, this.props.name)} />
        <input type="button" value="Withdraw" onClick={(e) => this.props.handleWithdrawClick(e, this.refs.amount.value, this.props.name)} />
        <input type="button" value="Transfer" onClick={(e) => this.props.handleTransferClick(e, this.refs.amount.value, this.props.name)} />
      </div>
    )
  }
}
