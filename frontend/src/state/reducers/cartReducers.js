export cartReducer (state ={cartItems:[]}, action) =>{
    switch (action.type) {
        case 'CART_ADD_ITEM':
            const item = action.payload;
            const exist = state.cartItems.find(x =>{
                x.product === item.product.id
            })
            if(exist){
                return{
                    ...state,
                    cartItems: state.cartItems.map(x => {
                        x.product === exist.product ? item : x
                    })
                }
            }else{
                return {
                    ...state,
                    cartItems:[...state.cartItems, item]
                }
            }
            return {cartItems:[...cartItems, action.payload]}
    
        default:
            return state;
    }
}