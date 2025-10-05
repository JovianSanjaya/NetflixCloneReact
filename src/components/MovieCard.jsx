import '../css/MovieCard.css';

import { useMovieContext} from '../contexts/MovieContext';

function MovieCard(props){

    const { isFavorite, addToFavorites,removeFromFavorites} = useMovieContext();
    const favourite = isFavorite(props.movie.id);

    function onFavourite(e){
        e.preventDefault();
        if(favourite) removeFromFavorites(props.movie.id);
        else addToFavorites(props.movie);
    }

    return(
        <div className="movie-card">
            <div className="movie-poster">
                <img src={`https://image.tmdb.org/t/p/w300${props.movie.poster_path}`} alt={props.movie.title} />
                <div className="movie-overlay">
                    <button className={`favorite-btn ${favourite ? "active" : ""}`} onClick={onFavourite}>
                         ♥
                    </button>
                </div>
            </div>
            <div className="movie-name">
                <h3>{props.movie.title}</h3>
                <p>{props.movie.release_date?.split("-")[0]}</p>
            </div>
        </div>
    )
}

export default MovieCard;
