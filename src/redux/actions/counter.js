import {
    INCREMENT, 
    INCREMENT_REQUESTED, 
    DECREMENT, 
    DECREMENT_REQUESTED,
    INCREMENT_BY_100
} from "../types";

export const incrementBy100 = (number) => {
    return (dispatch)=> {
        dispatch({
            type: INCREMENT_REQUESTED
        })

        dispatch({
            type: INCREMENT_BY_100,
            payload: { number }
        })
    }
}
export const increment = () => {
    return (dispatch)=> {
        dispatch({
            type: INCREMENT_REQUESTED
        })

        dispatch({
            type: INCREMENT
        })
    }
}

export const incrementAsync = () => {
    return (dispatch) => {
        dispatch({
            type: INCREMENT_REQUESTED
        })

        return setTimeout(() => {
            dispatch({
                type: INCREMENT
            })
        }, 3000)
    }
}

export const decrement = () => {
    return dispatch => {
        dispatch({
            type: DECREMENT_REQUESTED
        })

        dispatch({
            type: DECREMENT
        })
    }
}

export const decrementAsync = () => {
    return dispatch => {
        dispatch({
            type: DECREMENT_REQUESTED
        })

        return setTimeout(() => {
            dispatch({
                type: DECREMENT
            })
        }, 3000)
    }
}