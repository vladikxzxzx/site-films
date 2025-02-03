import List from './List.jsx'
import data_films from './data_src/movies.json'
import './css/List.css'

import React, { useState, useRef, useEffect } from 'react'

export default function Scroll() {
    const [visibleData, setVisibleData] = useState([]);
    const [count, setCount] = useState(10);
    const loaderRef = useRef(null);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        setVisibleData(data_films.slice(0, count));
    },
        [count, data_films]
    );

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && hasMore) {
                    if (count >= data_films.length) {
                        setHasMore(false); // Всі дані завантажено
                    } else {
                        setCount((prevCount) => prevCount + 10); // Завантажуємо ще 10 елементів
                    }
                }
            },
            { threshold: 1.0 } // Викликається, коли loaderRef повністю у полі зору
        );

        if (loaderRef.current && hasMore) {
            observer.observe(loaderRef.current);
        }

        return () => {
            if (loaderRef.current) {
                observer.disconnect(); // Очищення observer при розмонтуванні
            }
        };
    }, [hasMore, count]);

    return (
        <><ol className='top_list'>
            {visibleData.map((item, index) => (
                <List
                    key={index}
                    lable={item.Title}
                    year={item.Year}
                    rate={item.Ratings[0].Value}
                    poster={item.Poster}
                    tr_poster={item.trailerPoster}
                    runtime = {item.Runtime}
                    genre={item.Genre}
                    director={item.Director}
                    describe={item.Plot}
                    country={item.Country}
                    actors={item.Actors}
                />))};
        </ol>
        
        {hasMore && <div
        ref={loaderRef}
        style={{ height: "50px", textAlign: "center", color:'white', fontSize:'25px', fontFamily:"Marck Script" }}
    >
        Завантаження...
    </div>}
        </>
    )
}