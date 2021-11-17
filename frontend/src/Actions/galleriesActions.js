import {
    IS_LOADING,
    GET_GALLERIES_SUCCESS,
    GET_GALLERIES_FAILED,
} from './actionTypes.js';

export const fetchGalleries = () => {
    return (dispatch) => {
        dispatch({ type: IS_LOADING });
        fetch(`http:localhost:3001/galleries`)
        .then(response => {
            if (!response.ok) {
                throw new Error('There is an issue with the network response.')
            }
            return response.json()
        })
        .then((data) => dispatch({
            type: GET_GALLERIES_SUCCESS,
            payload: {
                data
            }
        }))
        .catch(e => dispatch({
            type: GET_GALLERIES_FAILED,
            payload: { error: e }
        }));
    }
}