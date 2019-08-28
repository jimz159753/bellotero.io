import { handleActions } from 'redux-actions';

export default handleActions({
    getData: (state, action) => {
        console.log('REDUCER',action)
        return [1,2,3];
    },
}, [])
