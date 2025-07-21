
import MovieCard from "../components/MovieCard";
import {useState} from "react";

import React, { useReducer } from 'react';



function Home(){
    // const [searchQuery, setSeachQuery] = useState("");

    // const movie = [
    //     {id:1,title: "John Wick", release_date:"2020"},
    //     {id:2,title: "Terminator", release_date:"1999"},
    //     {id:3,title: "The matrix", release_date:"1998"},
    // ];

    // function handleSubmit(e){
    //     e.preventDefault();
    //     setSeachQuery("");
    // }

    // return (
    //     <div className="">
    //         <form onSubmit={handleSubmit} className="search-form">
    //             <input type="text" placeholder="Search for movies..." className="search-input" value={searchQuery} onChange={(e)=> setSeachQuery(e.target.value)}/> 
    //             <button className="search-button" type="submit">Search</button>
    //         </form>
    //         <div className="home-grid">
    //             {movie.map(movie=><MovieCard movie={movie} key={movie.id}/>)}
    //         </div>
    //     </div>
    // )
}

export default Home;



