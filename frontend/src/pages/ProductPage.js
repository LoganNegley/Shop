import React, { useState, useEffect } from "react";
import axios from "../axios"; //my axios instance with baseURL in folder
import { Link, useParams, useHistory } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button, Form } from "react-bootstrap";
import Rating from "../components/Ratings";
import {useDispatch, useSelector} from 'react-redux';
import {productDetails} from '../state/actions/productActions';

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();
  const selectedProduct = useSelector((store) => store.productDetails);
  const {loading, error, product} = selectedProduct;

  useEffect(() => {
    dispatch(productDetails(id))
  }, [id]);

  const addToCartHandler = ()=>{
    history.push(`/cart/${id}?qty=${quantity}`)
  }


  return (
    <>
      <Link to="/" className="btn btn-dark my-3">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                rating={product.rating}
                numReviews={product.numReviews}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            <ListGroup.Item>
              Description: {product.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="fluid">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0
                      ? "In Stock"
                      : "Out of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>
              {product.countInStock > 0 && (
                <ListGroup.Item>
                  <Row>
                    <Col>Qty</Col>
                    <Col>
                      <Form.Control 
                        as='select' 
                        value={quantity} 
                        onChange={(event) =>{
                          console.log(event.target.value)
                        setQuantity(event.target.value)}}
                      >
                        {[...Array(product.countInStock).keys()].map(num =>(
                          <option key={num + 1} value={num + 1}>
                            {num + 1}
                            </option>
                        ))}
                      </Form.Control>
                    </Col>
                  </Row>
                </ListGroup.Item>
              )}
              <ListGroup.Item>
                <Button
                  onClick = {addToCartHandler}
                  className="btn-block add-cart-btn"
                  type="button"
                  disabled={product.countInStock === 0}
                >
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductPage;
