import axios from '../../axios';

// export const listProducts = () => async (dispatch) =>{
//     try {
//         dispatch({type:'PRODUCT_LIST_REQUEST'})
//         const {data} = await axios.get('/api/products')

//         dispatch({
//             type:'PRODUCT_LIST_SUCCESS',
//             payload:data})
//     } catch (error) {
//         dispatch({
//             type:'PRODUCT_LIST_FAIL',
//             payload:error.response && error.response.data.message ? error.response.message : error.message
//         })
//     }
// };

export const listProducts = () => (dispatch) =>{
        dispatch({type:'PRODUCT_LIST_REQUEST'})
        axios.get('/api/products')
        .then(res =>{
            dispatch({
                type:'PRODUCT_LIST_SUCCESS',
                payload:res.data
                })
            })

        .catch(error =>{
            dispatch({
                type:'PRODUCT_LIST_FAIL',
                payload:error.response && error.response.data.message ? error.response.message : error.message
            })
        })
};

// export const productDetails = (id) => async (dispatch) =>{
//     try {
//         dispatch({type:'PRODUCT_DETAILS_REQUEST'})
//         const {data} = await axios.get(`/api/products/${id}`)

//         dispatch({
//             type:'PRODUCT_DETAILS_SUCCESS',
//             payload:data})
//     } catch (error) {
//         dispatch({
//             type:'PRODUCT_DETAILS_FAIL',
//             payload:error.response && error.response.data.message ? error.response.message : error.message
//         })
//     }
// };

export const productDetails = (id) => (dispatch) =>{

        dispatch({type:'PRODUCT_DETAILS_REQUEST'})

        axios.get(`/api/products/${id}`)
        .then(res =>{
            dispatch({
                type:'PRODUCT_DETAILS_SUCCESS',
                payload:res.data})
        })

        .catch (error =>{

           dispatch({
               type:'PRODUCT_DETAILS_FAIL',
               payload:error
           })
        })   
};

