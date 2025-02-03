import List_s from './List_s.jsx'
import data_series from './data_src/series.json'
import './css/List.css'

import React, { useState, useRef, useEffect } from 'react'

export default function Scroll_s() {
    const [visibleData, setVisibleData] = useState([]);
    const [count, setCount] = useState(10);
    const loaderRef = useRef(null);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        setVisibleData(data_series.slice(0, count));
    },
        [count, data_series]
    );

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && hasMore) {
                    if (count >= data_series.length) {
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
                <List_s
                    key={index}
                    lable={item.Name}
                    year={item.Year}
                    rate={item.Rating}
                    poster={item.Image}
                    tr_poster={item.Image}
                    describe={item.Description}
                    episodes={item.Episodes}
                    type={item.Type}
                />))}
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