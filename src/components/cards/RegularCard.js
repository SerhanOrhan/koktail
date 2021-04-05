import React from 'react';
import { Link } from 'react-router-dom';
function RegularCard(props) {
  const {title, thumbnail, description,id} = props;
  return (
    <Link to={{ pathname: "/detail/"+id}} className="regular-card-link">
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
    </Link>
 
  );
}

export default RegularCard;