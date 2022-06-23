import React from 'react';
import Logo from '../../assets/img/PsychoArt.png';
import { ReactComponent as SearchIcon } from '../../assets/img/search.svg';
import Wallet from '../Wallet/Wallet';


import './style.scss';


function SearchBar() {

  return (
    <div className="search">
      <SearchIcon className="search-icon" />
      <input disabled className="search-input" type="search" placeholder="Search items and collections"></input>
    </div>);
}

function Links() {
  const links = [
    {
      url: '/Collections',
      name: 'Collections'
    },
    {
      url: '/Feature',
      name: 'Feature'
    },
    {
      url: '/FAQ',
      name: 'FAQ'
    },
  ];

  return (
    <div className="link-list">
      {links.map(link => (
        <a className="link-item" key={link.name} href={link.url} >{link.name}</a>))}
    </div>);
}

function NavBar() {

  return (
    <div className="nav-bar">
      <div className="nav-bar-left">
        <img src={Logo} alt="Logo" />
        <SearchBar />

      </div>
      <div className="nav-bar-right">
        <Links/>
        <Wallet />
      </div>
    </div>
  );
}

export default NavBar;
