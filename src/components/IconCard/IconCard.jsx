import React from 'react';
import Icon from '../Icon/Icon';
import './IconCard.css';

const IconCard = ({ symbol, tag, designedSize, category, stroke, name, customClass, size }) => (
  <li className="list__item" title={ name }>
    <div className="card">
      <Icon symbol={symbol} stroke={stroke} customClass={customClass} size={size} name={name}/>
    </div>
    <div className="info">
      <div className="info__symbol"><strong>Name:</strong> <code>{ name }</code></div>
      <div className="info__symbol"><strong>Symbol ID:</strong> <code>{ symbol }</code></div>
      <div className="info__symbol"><strong>Tag:</strong> <code>{ tag }</code></div>
      <div className="info__symbol"><strong>Designed Size:</strong> <code>{ designedSize }</code></div>
      <div className="info__symbol"><strong>Category:</strong> <code>{ category }</code></div>
    </div>
  </li>
);

export default IconCard;
