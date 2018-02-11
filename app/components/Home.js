// @flow
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {DefaultButton} from 'office-ui-fabric-react/lib/Button';
import {CommandButton} from 'office-ui-fabric-react/lib/Button';
import {CommandBar} from 'office-ui-fabric-react/lib/CommandBar';

import styles from './Home.css';

type Props = {};
const items = [
  {
    key: 'overview',
    name: 'Overview',
    icon: 'Home',
    onClick: () => console.log('OVERVIEW clicked')
  }, {
    key: 'send',
    name: 'Send',
    icon: 'Send',
    onClick: () => console.log('SEND clicked')
  }, {
    key: 'receive',
    name: 'Receive',
    icon: 'Accept',
    onClick: () => console.log('RECEIVE clicked')
  }, {
    key: 'transactions',
    name: 'Transactions',
    icon: 'Money',
    onClick: () => console.log('TRANSACTIONS clicked')
  }
];

const farItems = [
  {
    key: 'options',
    name: 'Options',
    items: [{
      key: 'encrypt wallet',
      name: 'Encrypt Wallet',
      icon: 'BlockedSite'
    }, {
      key: 'change passphrase',
      name: 'Change Passphrase',
      icon: 'Permissions'
    }, {
      key: 'lock wallet',
      name: 'Lock Wallet',
      icon: 'Lock'
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
    }]
  }
];

export default class Home extends Component < Props > {
  props : Props;

  render() {
    return (
      <div>
        <CommandBar items={items} farItems={farItems}></CommandBar>
        <div className={styles.container} data-tid='container'>
          <div className='ms-font-xxl ms-fontColor-purple'>WALLET</div>
          <Link to='/counter'>
            <DefaultButton>COUNTER</DefaultButton>
          </Link>
        </div>
      </div>
    );
  }
}
