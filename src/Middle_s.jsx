import './css/Middle.css';
import find from './images/search.png';
import Scroll_s from './Scroll_s.jsx';
import data_series from './data_src/series.json';
import List_s from './List_s.jsx';
import './css/List.css';

import React, { useState } from 'react';

export default function Middle_s() {
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
                <h2>Top 100 Series</h2>
            </div>

            {searchTerm.length === 0 ? (
                <Scroll_s />
            ) : (
                <ol className="top_list">
                    {data_series
                        .filter((item) => item.Name.toLowerCase().includes(searchTerm))
                        .map((item) => (
                            <li key={item.Year}>
                                <List_s 
                                    lable={item.Name}
                                    year={item.Year}
                                    rate={item.Rating}
                                    poster={item.Image}
                                    tr_poster={item.Image}                                
                                    episodes={item.Episodes}
                                    describe={item.Description}
                                    type={item.Type}
                                />
                            </li>
                        ))}
                </ol>
            )}
        </div>
    );
}
