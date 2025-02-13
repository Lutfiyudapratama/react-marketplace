import { fetchAPI } from "../utils";

const init = {
    load: true,
    data: [],
    error: null,
    message: ''
}

const getBanner = () => {
    return async (dispatch) => {
        dispatch({ type: "Banner_init" })
        fetchAPI().get('/Banner')
            .then((response) => {
                dispatch({ type: "Banner_fetch_success", 
                    payload: {
                        data: response?.data?.data,
                        message: response?.data?.message   
                    }
                 })
            })
            .catch((error) => {
                dispatch({ type: "Banner_fetch_fail", 
                    error: error.response
                 })
            })

            .then((error) => {
                dispatch
            })
    }
}



const BannerReducer = (state = init, action) => {
    switch (action.type) {
        case "Banner_init":
            return {
                ...state,
                load: true,
                error: null,
                message: ''
            }
        case "Banner_fetch_success":
            return {
                ...state,
                load: false,
                data: action?.payload?.data,
                message: action?.payload?.message
            }
        case "Banner_fetch_fail":
            return {
                ...state,
                load: false,
                error: action?.payload?.error
            }
        default:
            return state
    }
}
export {
    BannerReducer,
    getBanner,
    
}













