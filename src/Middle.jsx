import './css/Middle.css';
import find from './images/search.png';
import Scroll from './Scroll.jsx';
import data_films from './data_src/movies.json';
import List from './List.jsx';
import './css/List.css';

import React, { useState } from 'react';

export default function Middle() {
    const [searchTerm, setSearchTerm] = useState("");

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    return (
        <div className="all">
            <div className="input_field">
                <input 
                    type="text" 
                    className="finder" 
                    placeholder="Пошук..." 
                    value={searchTerm} 
                    onChange={handleInputChange}
                />
                <button className="button_img">
                    <img src={find} className="imgbut" alt="finder" />
                </button>
            </div>

            <div className="topic_h">
                <h2>Top 100 Films</h2>
            </div>
            {searchTerm.length === 0 ? (
                <Scroll />
            ) : (
                <ol className="top_list">
                    {data_films
                        .filter((item) => item.Title.toLowerCase().includes(searchTerm))
                        .map((item) => {
                            return (
                                <li key={item.id}>
                                    <List
                                        lable={item.Title}
                                        year={item.Year}
                                        rate={item.Ratings[0].Value}
                                        poster={item.Poster}
                                        tr_poster={item.trailerPoster}
                                        runtime={item.Runtime}
                                        genre={item.Genre}
                                        director={item.Director}
                                        describe={item.Plot}
                                        country={item.Country}
                                        actors={item.Actors}
                                    />
                                </li>
                            );
                        })}
                </ol>
            )}
        </div>
    );
}
