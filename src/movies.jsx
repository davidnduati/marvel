import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function Movies() {
    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const url = `https://gateway.marvel.com/v1/public/series?limit=64&apikey=8a5123f9dfdc1fda1fc515aa23161833`;

    const fetchData = async () => {
        try {
            const response = await axios.get(url);
            setMovies(response.data.data.results);
        } catch (error) {
            console.error(error);
        }
    };

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (<>
        <input type="text" value={searchQuery} onChange={handleSearch} placeholder="Search movie..." />

        <div className='wonders'>
            {filteredMovies.map((movie) => (
                <div key={movie.id}>
                    <img src={`${movie.thumbnail.path}.${movie.thumbnail.extension}`} alt={movie.title} />
                    <p>{movie.title}</p>
                </div>
            ))}
        </div>
        </>
    );
}

export default Movies;
