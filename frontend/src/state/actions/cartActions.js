import axios from '../../axios';

//getState allows us to get all of the state tree from the store
//    productList: productListReducer,
//     productDetails: productDetailsReducer,
//     cart: cartReducer,

export const addToCart = (id, quantity) => async (dispatch, getState) =>{
    try {
        const {data} = await axios.get(`/api/products/${id}`)
        dispatch({type:'CART_ADD_ITEM',
        payload: {
            product_id: data._id,
            name: data.name,
            price: data.price,
            image: data.image,
            countInStock: data.countInStock,
            quantity
        }})

        localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))


    } catch (error) {
        console.log(error)
    }
};

export const removeItem = () => async(dispatch) =>{
    try {
        
    } catch (error) {
        
    }
};