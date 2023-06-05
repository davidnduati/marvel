import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function Comics() {
    const [comics, setComics] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedComic, setSelectedComic] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const url = `https://gateway.marvel.com/v1/public/comics?limit=20&apikey=8a5123f9dfdc1fda1fc515aa23161833`;

    const fetchData = async () => {
        try {
            const response = await axios.get(url);
            setComics(response.data.data.results);
        } catch (error) {
            console.error(error);
        }
    };

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleComicClick = (comic) => {
        setSelectedComic(comic);
    };

    const filteredComics = comics.filter((comic) =>
        comic.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <input type="text" value={searchQuery} onChange={handleSearch} placeholder="Search comic..." />

            <div className="wonders">
                {filteredComics.map((comic) => (
                    <div
                        key={comic.id}
                        className={`comic ${selectedComic === comic ? 'selected' : ''}`}
                        onClick={() => handleComicClick(comic)}
                    >
                        <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.title} />
                        <p>{comic.title}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Comics;
