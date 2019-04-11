import * as ListAPIUtil from '../util/list_api_util';
// import { RECEIVE_ERRORS } from './session_actions';

export const RECEIVE_LIST = "RECEIVE_LIST";

export const receiveList = data => {
    debugger
    return {
        type: RECEIVE_LIST,
        data
    }
}

// export const receiveError = error => {
//     return {
//         type: RECEIVE_ERRORS,
//         error
//     }
// }

export const fetchList = id => dispatch => {
    return (
        ListAPIUtil.fetchList(id).then(data => dispatch(receiveList(data)))
    );
};