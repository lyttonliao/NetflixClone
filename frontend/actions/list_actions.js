import * as ListAPIUtil from '../util/list_api_util';

export const RECEIVE_LIST = "RECEIVE_LIST";

export const receiveList = list => {
    return {
        type: list,
        list
    }
}

export const fetchList = id => dispatch => {
    return (
        ListAPIUtil.fetchList(id).then(list => dispatch(receiveList(list)))
    );
};