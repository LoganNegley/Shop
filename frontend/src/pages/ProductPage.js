import React, { useState, useEffect } from "react";
import axios from "../axios"; //my axios instance with baseURL in folder
import { Link, useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import Rating from "../components/Ratings";

const ProductPage = () => {
  const [selectedProduct, setSelectedProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`/api/products/${id}`)
      .then((res) => {
        const { data } = res;
        setSelectedProduct(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <>
      <Link to="/" className="btn btn-dark my-3">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={selectedProduct.image} alt={selectedProduct.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{selectedProduct.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                rating={selectedProduct.rating}
                numReviews={selectedProduct.numReviews}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${selectedProduct.price}</ListGroup.Item>
            <ListGroup.Item>
              Description: {selectedProduct.description}
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
                    <strong>${selectedProduct.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {selectedProduct.countInStock > 0
                      ? "In Stock"
                      : "Out of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className="btn-block add-cart-btn"
                  type="button"
                  disabled={selectedProduct.countInStock === 0}
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
