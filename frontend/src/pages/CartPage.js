import React, {useEffect} from 'react';
import {Link, useParams, useLocation, useHistory} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import Message from '../components/Message';
import {Row, Col, ListGroup, Image, Form, Button, Card} from 'react-bootstrap';
import {addToCart, removeFromCart} from '../state/actions/cartActions';


const CartPage = () => {
    const {id} = useParams();
    const history = useHistory();
    const location = useLocation(); //uses the query string in URL
    const dispatch = useDispatch();


    const qty = location.search ? Number(location.search.split('=')[1]) : 1
    // console.log(Number(location.search.split('=')[1])) //getting number out of query string by split('=') putting it in an array and useing number method to change from string to number type

    const {cartItems} = useSelector((store) => store.cart);
    console.log(cartItems)

    useEffect(() =>{
        if(id){ //only run action if there is a product Id in params---going to cart does not mean there will always be a product Id to add
            dispatch(addToCart(id, qty))
        }
    },[dispatch, id, qty])

    const removeFromCartHandler = (productId) =>{
        dispatch(removeFromCart(productId))
    }

   const checkoutHandler =()=>{
       history.push(`/login?redirect=shipping`) //if user logged in redirect to shipping otherwise user must sign in
    }



    return (
        <Row>
            <Col md={8}>
                <h1>Shopping Cart</h1>
                {cartItems.length === 0 ? <Message>Your cart is empty <Link to='/'>Go Back</Link> </Message>: 
                    <ListGroup variant='flush'>
                        {cartItems.map(item =>(
                            <ListGroup.Item>
                                <Row>
                                    <Col md={2}>
                                        <Image src={item.image} alt={item.name} fluid rounded/>
                                    </Col>
                                    <Col md={3}>
                                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                                    </Col>
                                    <Col md={2}>
                                        ${item.price}
                                    </Col>
                                    <Col md={2}>
                                        <Form.Control 
                                            as='select' 
                                            value={item.quantity} 
                                            onChange={(event) =>{
                                            dispatch(addToCart(item.product_id, Number(event.target.value)))}}
                                          >
                                            {[...Array(item.countInStock).keys()].map(num =>(
                                              <option key={num + 1} value={num + 1}>
                                                {num + 1}
                                                </option>
                                            ))}
                                          </Form.Control>
                                    </Col>
                                    <Col md={2}>
                                        <Button 
                                        type='button' 
                                        variant='light' 
                                        onClick={() =>{
                                            removeFromCartHandler(item.product_id)
                                        }}
                                    >
                                            <i className='fas fa-trash' />
                                        </Button>

                                    </Col>
                                </Row>
                            </ListGroup.Item>
                ))}
                    </ListGroup>
                }
            </Col>
            <Col md={4}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2> Subtotal ({cartItems.reduce((acc, item) => acc + item.quantity, 0 )}) items</h2>
                            <h2>${cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0 ).toFixed(2)}</h2>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button type='button' className='btn-block' disabled={cartItems.length=== 0} onClick={checkoutHandler}>Proceed To Checkout</Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
    )
}

export default CartPage
