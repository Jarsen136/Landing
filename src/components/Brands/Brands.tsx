import React from 'react';
import { ReactComponent as Binance } from '../../assets/img/binance.svg';
import { ReactComponent as BlockChain } from '../../assets/img/blockchain.svg';
import { ReactComponent as Eth } from '../../assets/img/ethereum.svg';

import './style.scss';


function Brands() {

  const brandsList = [Binance, Eth, BlockChain]

  return (
    <div className="brands-list">
      {brandsList.map((Com, index) => <Com key={index} className="brands-list-item"/>)}
    </div>
  );
}

export default Brands;
