import { createAction } from 'redux-actions';
import Axios from 'axios';

export const getDataSuccess = createAction('getDataSuccess');
export const getData = (url) => async (dispatch) => {
    try {
        const resp = await Axios.get(url);
        console.log('axios',resp);
        dispatch(getDataSuccess(resp.data));
    } catch (error) {
        console.log('ERROR',error)
    }
}