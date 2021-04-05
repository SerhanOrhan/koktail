import React from 'react'
import { Container,Row,Col } from 'react-bootstrap';

function ItemCard(props) {
  const {title, thumbnail, description,category,glasstype,kokalcoholic,measure1,ingredient1,measure2,ingredient2,measure3,ingredient3,measure4,ingredient4,measure5,ingredient5,measure6,ingredient6,measure7,ingredient7,measure8,ingredient8} = props;
  return (
    
<Container>

    <div className="item-list-card">
    <Row>
 
    <Col sm={4}>
      <div className="item-card-thumbnail">
        <img src={thumbnail} alt={title} />
      </div>
      </Col>
      <Col sm={7}>
      <div className="item-card-content">
     
        <ul className="item-card-instruction">
          <li><a><h1>Instruction : {title}</h1></a></li>
          <li><a>{description}</a></li>
          <li><a><b> Drik Name : </b> {title}</a></li>
          <li><a><b> Category : </b>{category} </a></li>
          <li><a><b> Glass Type : </b> {glasstype} </a></li>
          <li><a><b> Alcoholic : </b> {kokalcoholic} </a></li>
        </ul>
        <div className="item-card-ingredients">
        <ul>
          <li><a><h4>Ingredients</h4></a></li>
          <li><a>{measure1} {ingredient1}</a></li>
          <li><a>{measure2} {ingredient2}</a></li>
          <li><a>{measure3} {ingredient3}</a></li>
          <li><a>{measure4} {ingredient4}</a></li>
          <li><a>{measure5} {ingredient5}</a></li>
          <li><a>{measure6} {ingredient6}</a></li>
          <li><a>{measure7} {ingredient7}</a></li>
          <li><a>{measure8} {ingredient8}</a></li>
        </ul>
        </div>
   
      </div>
      </Col>

      </Row>
    </div>
 
</Container>


  )
}

export default ItemCard
