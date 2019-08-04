import App from './App'
import { connect } from 'react-redux'

export const msp = state => {
    return ({
        movie_titles: state.entities.search
    })
}

export default connect(msp, null)(App)