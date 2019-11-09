import React from 'react';
import { withRouter } from 'react-router-dom';
import './Menuitem.styles.scss';

const Menuitem = ({id, title, imageUrl, size, linkUrl, history, match }) => {
  console.log(id, title, imageUrl, linkUrl, size, match);
  return (
    <div
      className={size ? `menu-item menu-item-${size}` : 'menu-item' }
      onClick={()=>history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      >
      </div>
      <div className="content">
        <h1 className="title"> {title} </h1>
        <span className="subtitle">Shop Now</span>
      </div>
    </div>
  );
};

export default withRouter(Menuitem);