import React from 'react'
import { Container, Row } from 'react-bootstrap';

function Categoryitems(props) {
    const {title, thumbnail} = props;
    return (
        <Container>
            <Row>
        <div className="category-list-card">
        <div className="category-card-thumbnail">
          <img src={thumbnail} alt={title}/>
        </div>
        <div className="category-list-card-content">
          <div className="category-title">
            <h2>{title}</h2>
          </div>
        </div>
    </div>
    </Row>
    </Container>
    )
}

export default Categoryitems;
