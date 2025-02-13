import { fetchAPI } from "../utils";

const init = {
    load: true,
    data: [],
    error: null,
    message: ''
}

const getproduct = () => {
    return async (dispatch) => {
        dispatch({ type: "product_init" })
        fetchAPI().get('/product')
            .then((response) => {
                dispatch({ type: "product_fetch_success", 
                    payload: {
                        data: response?.data?.data,
                        message: response?.data?.message   
                    }
                 })
            })
            .catch((error) => {
                dispatch({ type: "product_fetch_fail", 
                    error: error.response
                 })
            })

            .then((error) => {
                dispatch
            })
    }
}

const addToCart =(product, id) =>{
    let productchoose = product?.map((p) => p.id === id ? {...p, stock: p.stock - 1} : p)
    return{
        type: "product_to_cart",
        payload: {
            data: productchoose 
        }
    }
    console.log({...product, stock: product.stock - 1})
}

const productReducer = (state = init, action) => {
    switch (action.type) {
        case "product_init":
            return state
        case "product_to_cart":
            return{
                ...state,
                data: action?.payload?.data
            }

        case "product_fetch_success":
            return {
                ...state,
                data: action?.payload?.data,
                message: action?.payload?.message
            }
        case "product_fetch_fail":
            return {
                ...state,
                load: false,
                data: [],
                message: action?.payload?.message
            }
        default:
            return init
    }
}
export {
    productReducer,
    getproduct,
    addToCart
}













