import App from './App'
import { connect } from 'react-redux'
// import { clearSearch } from '../actions/search_actions'

export const msp = state => {
    return ({
        active_search: state.ui.current_search || ""
    })
}

// export const mdp = dispatch => {
//     return ({
//         clearSearch: () => dispatch(clearSearch())
//     })
// }

export default connect(msp, null)(App)