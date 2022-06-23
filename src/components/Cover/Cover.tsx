import React from 'react';
import Rectangle11 from '../../assets/img/Rectangle11.png';
import Rectangle12 from '../../assets/img/Rectangle12.png';
import Rectangle13 from '../../assets/img/Rectangle13.png';
import Rectangle21 from '../../assets/img/Rectangle21.png';
import Rectangle22 from '../../assets/img/Rectangle22.png';
import Rectangle23 from '../../assets/img/Rectangle23.png';
import Rectangle31 from '../../assets/img/Rectangle31.png';

import Button from '../Base/Button/Button'

import './style.scss';


function StatsPanel() {
  const stats = [
    {
      key: 'Artworks',
      value: '37k+'
    },
    {
      key: 'Artists',
      value: '20k+'
    },
    {
      key: 'Aucations',
      value: '99k+'
    },
  ]
  return (
    <div className="stats-panel">
      <div className="stats-panel-title" >Create, Sell &<br /> Collect Your Own<br /> Creative NFT</div>
      <div className="stats-panel-content" >Lorem ipsum dolor sit amet, consectetur<br /> adipiscing elit. Nunc vulputate libero et velit.</div>
      <div className="stats-panel-buttons" >
        <Button customClassName="button-left" text="Explore Now" />
        <Button text="Sell NFT" theme="transparent"/>
      </div>
      <div className="stats-list">
        {stats.map(item => (
          <div className="stats-list-item" key={item.key}>
            <div className="number">{item.value}</div>
            <div className="name">{item.key}</div>
          </div>))}
      </ div>
    </ div>);
}



function ImageColumn(props: { imageColumn: string[] }) {
  const { imageColumn } = props;
  return (
  <div className="image-column">
    {imageColumn.map(url => <img key={url} src={url} alt="" className="image-item"/>)}
  </ div>);
}

function ImageWall() {
    const imageColumnList = [
      [Rectangle11, Rectangle12, Rectangle13],
      [Rectangle21, Rectangle22, Rectangle23],
      [Rectangle31]
    ]

    return (
    <div className="image-wall">
      {imageColumnList.map((col, idx) => <ImageColumn key={idx} imageColumn={col}/>)}
    </div>)
}




function Cover() {

  return (
    <div className="cover-main">
      <StatsPanel />
      <ImageWall />
    </div>
  );
}

export default Cover;
