import App from './App'
import { connect } from 'react-redux'

export const msp = state => {
    return ({
        movie_titles: state.ui.search || [],
        active_search: state.ui.current_search || ""
    })
}

export default connect(msp, null)(App)