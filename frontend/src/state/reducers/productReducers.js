
export const productListReducer =( state = {products:[]}, action)=>{
    switch(action.type){
        case 'PRODUCT_LIST_REQUEST':
            return {
                ...state, loading:true}
        case 'PRODUCT_LIST_SUCCESS':
            return {
                ...state, loading:false, products:action.payload}
        case 'PRODUCT_LIST_FAIL':
            return {
                ...state, loading:false, error: action.payload}
        default:
            return state
    }
}

export const productDetailsReducer =( state = {product:[]}, action)=>{
    switch(action.type){
        case 'PRODUCT_DETAILS_REQUEST':
            return {
                ...state, loading:true}
        case 'PRODUCT_DETAILS_SUCCESS':
            return {
                ...state, loading:false, product:action.payload}
        case 'PRODUCT_DETAILS_FAIL':
            return {
                ...state, loading:false, error: action.payload}
        default:
            return state
    }
}