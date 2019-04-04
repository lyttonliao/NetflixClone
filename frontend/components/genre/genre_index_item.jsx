import react from 'React';

class GenreIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    toggleDropdown() {
        
    }

    render() {
        const { movie, genre } = this.props
        // add thumbs up, thumbs down, play button, volume button (if possible)
        return(
            <div className="movie-item-image-container">
                <img className="box-art-image" src={this.props.movie.imageUrl}/>
                <div className="movie-item-box">                
                    <p className="movie-item-title">{movie.title}</p>
                    <p className="movie-item-year">{movie.year}</p>
                    <p className="movie-item-desc">{movie.description}</p>
                </div>
            </div>
        )
    }
}