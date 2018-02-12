// @flow
import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import {CommandBar} from 'office-ui-fabric-react/lib/CommandBar';
import {CommandButton} from 'office-ui-fabric-react/lib/Button';
import styles from './Transactions.css';

type Props = {
  increment: () => void,
  incrementIfOdd: () => void,
  incrementAsync: () => void,
  decrement: () => void,
  counter: number
};

class Transactions
 extends Component<Props> {
  props: Props;

  render() {
    const {
      increment, incrementIfOdd, incrementAsync, decrement, counter
    } = this.props;

    const items = [
      {
        key: 'accounts',
        name: 'Accounts',
        icon: 'BankSolid',
        onClick: () => this.props.history.push('/')
      }, {
        key: 'transactions',
        name: 'Transactions',
        icon: 'Money',
        onClick: () => this.props.history.push('/transactions')
      }
    ];
    
     const farItems = [
      {
        key: 'options',
        name: 'Options',
        items: [
          {
            key: 'change passphrase',
            name: 'Change Passphrase',
            icon: 'Permissions'
          }, {
            key: 'backup wallet',
            name: 'Backup Wallet',
            icon: 'Save'
          }, {
            key: 'settings',
            name: 'Settings',
            icon: 'Settings'
          }, {
            key: 'exit',
            name: 'Exit',
            icon: 'Cancel'
          }
        ]
      }
    ];

    return (
      <div>
      <CommandBar items={items} farItems={farItems}></CommandBar>
      </div>
    );
  }
}
export default withRouter(Transactions);