
import MovieCard from "../components/MovieCard";
import {useEffect, useState} from "react";
import "../css/Home.css";
import { searchPopularMovies, getPopularMovies} from "../services/api";



function Home(){
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try{
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            }
            catch(e){
                console.log(e);
                setError("failed to load movies...");
            }
            finally{
                setLoading(false);
            }
        }
        loadPopularMovies();
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!searchQuery.trim()) return;
        if(loading) return;

        setLoading(true)
        try{
            const searchResult = await searchPopularMovies(searchQuery);
            setMovies(searchResult);
            setError(null);
        }
        catch(err){
            console.log(err);
            setError("Failed to search movies ... ");
        }
        finally{
            setLoading(false);
        }
    }


    return (
        <div className="">
            <form onSubmit={handleSubmit} className="search-form">
                <input type="text" placeholder="Search for movies..." className="search-input" value={searchQuery} onChange={(e)=> setSearchQuery(e.target.value)}/> 
                <button className="search-button" type="submit">Search</button>
            </form>

            {error && <div className="error-message">{error}</div>}

            {loading ? 
                <div className="loading">Loading...</div>
             : 
                <div className="movies-grid">
                    {movies.map(movie=><MovieCard movie={movie} key={movie.id}/>)}
                </div>
            }

        </div>
    )   
}


export default Home;



