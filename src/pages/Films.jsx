import '../css/App.css'
import Header from '../Header.jsx'
import Middle from '../Middle.jsx'
import Footer from '../Footer.jsx'
import React, { useEffect } from 'react';

function Films() {

    useEffect(() => {
        const handleScroll = () => {
            const header = document.getElementById('header');
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="app">
            <Header />
            <Middle />
            <div className='space' ></div>
            <Footer />
        </div>

    )
}

export default Films
