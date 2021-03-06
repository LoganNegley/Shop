import React, { useEffect } from "react";
import Product from "../components/Product";
import { Row, Col } from "react-bootstrap";
import Loader from '../components/Loader';
import Message from '../components/Message';
import {useDispatch, useSelector} from 'react-redux';
import {listProducts} from '../state/actions/productActions';

const HomePage = () => {
  const dispatch = useDispatch();
  const productList = useSelector((store) => store.productList);
  const {loading, error, products} = productList; 

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch]);


  return (
    <>
      <h1>Latest Products</h1>
      {loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message> :
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
      }
    </>
  );
};

export default HomePage;
