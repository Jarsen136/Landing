
import React, { Component } from 'react';
import './style.scss';
import Button from '../Base/Button/Button'
import { getAddressId, displayAddress } from '../../common/utils/walletHelper';
interface IWalletState {
  connected: boolean;
  addressId: string;
}

class Wallet extends Component<{}, IWalletState> {

  state = {
    connected: false,
    addressId: '',
  }
  consectetur() {
  }

  connectHandler = async () => {
    await getAddressId().then(addressId => {
      if (!addressId) return;
      this.setState({
        connected: true,
        addressId,
      });
    });
  }

  disconnect = () => {
    this.setState({
      connected: false,
      addressId: ''
    })
  }

  render() {
    const { connected, addressId } = this.state;
    if (!connected) {
      return <Button text="Select Wallet" onClick={this.connectHandler}/>
    }

    return (<Button tooltip={addressId} text={displayAddress(addressId)} onClick={this.disconnect}/>)

  }
}

export default Wallet;

