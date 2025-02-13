import { fetchAPI } from "../utils"

const init = {
    load: true,
    data: null,
    message: null,
    err: null
}

export const registerSubmit = (data) => (distpatch) => fetchAPI().post("register", data).then(response =>
    distpatch({
        type: "REGISTER_SUCCESS",
        payload: {
            message: response.data.message
        },
    })).catch(err => distpatch({
    type: "REGISTER_FAIL",
    payload: {
        error: err.response.data
    }
})
)

const userReducer = (state = init, action) => {
    switch (action.type) {
        case "AUTH_INIT":
            return state
        case "AUTH_SUCCESS":
            return {
                ...state,
                data: action?.payload?.data,

            }
        case "AUTH_FAIL":
            return {
                ...state,
                err: action?.payload?.err,
            }
        case "REGISTER_FAIL":
            return {
                ...state,
                err: action?.payload?.error
            }
        case "REGISTER_SUCCESS":
            return {
                ...state,
                message: action?.payload?.message
            }


        default:
            return init
    }
}

export default userReducer