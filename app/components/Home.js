// @flow
import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {DefaultButton} from 'office-ui-fabric-react/lib/Button';
import {CommandButton} from 'office-ui-fabric-react/lib/Button';
import {CommandBar} from 'office-ui-fabric-react/lib/CommandBar';
import {List} from 'office-ui-fabric-react/lib/List';

import styles from './Home.css';

class Home extends Component {
  render() {
    let {accounts} = this.props;
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
        <div className={styles.container} data-tid='container'>
          <div className='ms-font-xxl ms-fontColor-themePrimary'>Accounts</div>
          <List items={accounts} onRenderCell={this._onRenderCell}></List>
          <Link to='/counter'>
            <DefaultButton>COUNTER</DefaultButton>
          </Link>
        </div>
      </div>
    );
  }

  _onRenderCell(item, index, isScrolling) {
    return (
      <div className={`${styles.accountListItem} ms-Grid`} data-is-focusable={true}>
        <div className='ms-Grid-row'>
          <div className='ms-Grid-col ms-sm8 ms-lg10'>
            <div className='ms-font-xl ms-fontColor-themeTertiary'>{item.name}</div>
            <div>{item.type}</div>
          </div>
          <div
            style={{
            textAlign: 'right'
          }}
            className='ms-Grid-col ms-sm4 ms-lg2 ms-fontColor-orangeLighter ms-font-l'>
            {`${item
              .balance
              .toFixed(2)}`}</div>
        </div>
      </div>
    );
  }
}
export default withRouter(Home);