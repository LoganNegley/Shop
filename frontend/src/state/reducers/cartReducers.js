export const cartReducer = (state ={cartItems:[]}, action) =>{
    switch (action.type) {
        case 'CART_ADD_ITEM':
            const item = action.payload;
            const exist = state.cartItems.find(x =>(  //check if item is already in the cart or not
                x.product_id === item.product_id
            ))
            if(exist){  //if item is in cart already????
                return{
                    ...state, //spread all current state items
                    cartItems: state.cartItems.map(x =>(    //go through all state.cartItems
                        x.product_id === exist.product_id ? item : x
                    ))
                }
            }else{  //if item not in cart already
                return {
                    ...state, //return current state 
                    cartItems:[...state.cartItems, item] //state.cartItems spread current state array add new item
                }
            }
            // return {cartItems:[...cartItems, action.payload]}
    
        default:
            return state;
    }
}