import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
// import { fetchList } from './util/list_api_util';

document.addEventListener("DOMContentLoaded", () => {
    let store;
    const root = document.getElementById('root')

    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { currentUserId: window.currentUser.id}
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    // TESTING START
    // window.getState = store.getState
    // window.dispatch = store.dispatch
    // window.fetchList = fetchList;
    // TESTING DONE

    ReactDOM.render(<Root store={store} />, root)
})