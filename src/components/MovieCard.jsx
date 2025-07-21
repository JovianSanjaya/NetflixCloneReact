function onFavourite(){
    alert("clicked");
}


function MovieCard(props){
    return(
        <div className="movie-card">
            <div className="movie-poster">
                <img src={props.movie.url} alt={props.movie.title} />
                <div className="movie-overlay">
                    <button className="favourite-btn" onClick={onFavourite}>
                        ❤️
                    </button>
                </div>
            </div>
            <div className="movie-name">
                <h3>{props.movie.title}</h3>
                <p>{props.movie.release_date}</p>
            </div>
        </div>
    )
}

export default MovieCard;
