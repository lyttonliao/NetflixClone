import * as ListAPIUtil from '../util/list_api_util';

export const RECEIVE_LIST = "RECEIVE_LIST";

export const receiveList = data => {
    return {
        type: RECEIVE_LIST,
        data
    }
}

export const fetchList = id => dispatch => {
    return (
        ListAPIUtil.fetchList(id).then(data => dispatch(receiveList(data)))
    );
};