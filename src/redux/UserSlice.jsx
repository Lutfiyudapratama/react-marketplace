import { fetchAPI } from "../utils";

const init = {
    load: true,
    data: null,
    message: "",
    err: null
};
export const getprofile = (token) => (dispatch) => (fetchAPI().get("user", {
    headers: {
        "Accept": "application/json",
        Authorization: `Bearer ${token}`
    }
}).then(response => dispatch({
    type: "AUTH_SUCCESS",
    payload: {
        data:response?.data
    }
}).catch(err => dispatch({
    type: "AUTH_FAIL",
    payload: {
        err: err?.response
    }
}))));
export const registerSubmit = (data) => (dispatch) => 
    fetchAPI().post("register", data)
        .then(response => dispatch({
            type: "REGISTER_SUCCESS",
            payload: {
                message: response.data.message
            },
        }))
        .catch(err => dispatch({
            type: "REGISTER_FAIL",
            payload: {
                error: err.response.data
            }
        })
    );

export const LoginSubmit = (data) => (dispatch) => 
    fetchAPI().post("auth", data)
        .then(response => {
            let token = response?.data?.token;
            localStorage.setItem("token", token);
            dispatch({
                type: "LOGIN_SUCCESS",
                payload: {
                    message: response.data.message
                },
            });
        })
        .catch(err => dispatch({
            type: "LOGIN_FAIL",
            payload: {
                error: err.response.data
            }
        })
    );

const userReducer = (state = init, action) => {
    switch (action.type) {
        case "AUTH_INIT":
            return state;
        case "AUTH_SUCCESS":
            return {
                ...state,
                data: action?.payload?.data,
            };
        case "AUTH_FAIL":
            return {
                ...state,
                err: action?.payload?.err,
            };
        case "LOGIN_FAIL":
            return {
                ...state,
                err: action?.payload?.error
            };
        case "LOGIN_SUCCESS":
            return {
                ...state,
                message: action?.payload?.message
            };
        case "REGISTER_FAIL":
            return {
                ...state,
                err: action?.payload?.error
            };
        case "REGISTER_SUCCESS":
            return {
                ...state,
                message: action?.payload?.message
            };
        default:
            return state;
    }
};

export default userReducer;