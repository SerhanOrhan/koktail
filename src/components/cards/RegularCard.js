import React from 'react';

function RegularCard(props) {
  const {id, title, thumbnail, description} = props;
  return (
    <div className="regular-list-card">
        <div className="regular-card-thumbnail">
          <img src={thumbnail} alt={title}/>
        </div>
        <div className="regular-list-card-content">
          <div className="title">
            <h2>{title}</h2>
          </div>
          <div className="description">
            <p>{description}</p>
          </div>
        </div>
    </div>
  );
}

export default RegularCard;