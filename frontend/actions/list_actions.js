import * as ListAPIUtil from '../util/list_api_util';

export const RECEIVE_LIST = "RECEIVE_LIST";

export const receiveList = list => {
    debugger
    return {
        type: RECEIVE_LIST,
        list
    }
}

export const fetchList = id => dispatch => {
    return (
        ListAPIUtil.fetchList(id).then(list => dispatch(receiveList(list)))
    );
};