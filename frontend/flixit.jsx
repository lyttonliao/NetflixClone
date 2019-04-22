import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { fetchList } from './util/list_api_util';

document.addEventListener("DOMContentLoaded", () => {
    let store;
    const root = document.getElementById('root')

    // const movieRow1 = document.getElementById('movie-categories-1')
    // const movieRow2 = document.getElementById('movie-categories-2')
    // const movieRow3 = document.getElementById('movie-categories-3')
    // const movieRow4 = document.getElementById('movie-categories-4')
    // const movieRow5 = document.getElementById('movie-categories-5')


    // const movieContainer1 = document.getElementById('movie-row-1')
    // const movieContainer2 = document.getElementById('movie-row-2')
    // const movieContainer3 = document.getElementById('movie-row-3')
    // const movieContainer4 = document.getElementById('movie-row-4')
    // const movieContainer5 = document.getElementById('movie-row-5')

    // movieContainer1.addEventListener('mouseover', () => {
    //     movieRow1.style.padding = 0;
    //     // movieRow.style.padding-bottom = "4%";
    //     // movieRow.setAttribute("style", "padding: 0;")
    //     // movieRow.setAttribute("style", "padding-bottom: 4%;")
    // })

    // movieContainer2.addEventListener('mouseover', () => {
    //     movieRow2.style.padding = 0;
    // })

    // movieContainer3.addEventListener('mouseover', () => {
    //     movieRow3.style.padding = 0;
    // })

    // movieContainer4.addEventListener('mouseover', () => {
    //     movieRow4.style.padding = 0;
    // })

    // movieContainer5.addEventListener('mouseover', () => {
    //     movieRow5.style.padding = 0;
    // })

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
    window.getState = store.getState
    window.dispatch = store.dispatch
    window.fetchList = fetchList;
    // TESTING DONE

    ReactDOM.render(<Root store={store} />, root)
})