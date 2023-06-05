import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function Characters() {
    const [characters, setCharacters] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCharacter, setSelectedCharacter] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const url = `https://gateway.marvel.com/v1/public/characters?limit=50&apikey=8a5123f9dfdc1fda1fc515aa23161833`;

    const fetchData = async () => {
        try {
            const response = await axios.get(url);
            setCharacters(response.data.data.results);
        } catch (error) {
            console.error(error);
        }
    };

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleCharacterClick = (character) => {
        setSelectedCharacter(character);
    };

    const filteredCharacters = characters.filter((character) =>
        character.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <input type="text" value={searchQuery} onChange={handleSearch} placeholder="Search character..." />

            <div className="wonders">
                {filteredCharacters.map((character) => (
                    <div
                        key={character.id}
                        className={`character ${selectedCharacter === character ? 'selected' : ''}`}
                        onClick={() => handleCharacterClick(character)}
                    >
                        <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
                        <p>{character.name}</p>
                        <p>{character.description}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Characters;
