import React from 'react';
import { withRouter } from 'react-router-dom';
import NavBar from '../nav_bar';
import MovieIndexItem from '../movie/movie_index_item';

class ListMovies extends React.Component {
    constructor(props) {
        super(props)
    }

// .then(() => (
//     this.props.fetchListMovies(this.props.list.id)
// ))

    componentDidMount() {
        this.props.fetchList(this.props.match.params.listId).then(() => this.props.fetchListMovies(this.props.list))
    }

    // componentDidUpdate(prevProps) {
    //     if (prevProps.match.params.listId !== this.props.match.params.listId) {
    //         this.props.fetchList(this.props.match.params.listId)
    //     }
    // }

    // listMovies () {
    //     const { list} = this.props;
    //     return Object.values(list.listMovies).map(movie => {
    //         return <MovieIndexItem movie={movie} key={movie.title} />
    //     })      
    // }

    render() {
        const { logout, currentUser } = this.props;

        if (this.props.lists === undefined) {
            return (
                <div>
                    You haven't added any titles to your list yet.
                </div>
            )
        };

        let listMovies = Object.values(list.listMovies).map(movie => {
            return <MovieIndexItem movie={movie} key={movie.title} />
        })

        debugger

        return (
            <div className="personal-list">
                <NavBar logout={logout} currentUser={currentUser} />
                <div>
                    <h1>My List</h1>
                </div>

                <div>
                    {listMovies}
                </div>

            </div>
        )
    }
}

export default withRouter(ListMovies);
