import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

function ItemCard(props) {
  const { title, thumbnail, description, category, glasstype, kokalcoholic, measure1, ingredient1, measure2, ingredient2, measure3, ingredient3, measure4, ingredient4, measure5, ingredient5, measure6, ingredient6, measure7, ingredient7, measure8, ingredient8 } = props;
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
                <li><span><h1>Instruction : {title}</h1></span></li>
                <li><span>{description}</span></li>
                <li><span><b> Drik Name : </b> {title}</span></li>
                <li><span><b> Category : </b>{category} </span></li>
                <li><span><b> Glass Type : </b> {glasstype} </span></li>
                <li><span><b> Alcoholic : </b> {kokalcoholic} </span></li>
              </ul>
              <div className="item-card-ingredients">
                <ul>
                  <li><span><h4>Ingredients</h4>    </span></li>
                  <li><span>{measure1} {ingredient1}</span></li>
                  <li><span>{measure2} {ingredient2}</span></li>
                  <li><span>{measure3} {ingredient3}</span></li>
                  <li><span>{measure4} {ingredient4}</span></li>
                  <li><span>{measure5} {ingredient5}</span></li>
                  <li><span>{measure6} {ingredient6}</span></li>
                  <li><span>{measure7} {ingredient7}</span></li>
                  <li><span>{measure8} {ingredient8}</span></li>
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
