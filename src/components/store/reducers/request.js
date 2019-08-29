import { handleActions } from 'redux-actions';

export default handleActions({
    getData: (state, action) => {
        return action.payload;
    },
    getDataSuccess: (state, action) => {
        return action.payload;
    },
}, [])
