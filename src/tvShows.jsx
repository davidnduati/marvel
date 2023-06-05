import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function TvShow() {
    const [tvShows, setTvShows] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const url = `https://gateway.marvel.com/v1/public/stories?limit=64&apikey=8a5123f9dfdc1fda1fc515aa23161833`;

    const fetchData = async () => {
        try {
            const response = await axios.get(url);
            setTvShows(response.data.data.results);
        } catch (error) {
            console.error(error);
        }
    };

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredTvShows = tvShows.filter((tvShow) =>
        tvShow.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (<>
        <input type="text" value={searchQuery} onChange={handleSearch} placeholder="Search TV show..." />

        <div className='wonders'>
            {filteredTvShows.map((tvShow) => (
                <div key={tvShow.id}>
                    <img src={`${tvShow.thumbnail.path}.${tvShow.thumbnail.extension}`} alt={tvShow.title} />
                    <p>{tvShow.title}</p>
                </div>
            ))}
        </div>
        </>
    );
}

export default TvShow;
