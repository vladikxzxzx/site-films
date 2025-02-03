import './css/List.css'
import fallback from './images/404-poster.png'
import { useState } from 'react';
import Modal_s from './Modal_s.jsx'

export default function List_s({...props}) {
    let poster = props.poster;
    let tr_poster = props.tr_poster;
    let image = poster ? poster : tr_poster;
    const handleError = (e) => {
        // Перевіряємо, чи поточний src не є fallback, щоб уникнути циклу
        if (e.target.src !== tr_poster) {
          e.target.onerror = null; // Знімаємо обробник помилок
          e.target.src = tr_poster; // Замінюємо на fallback-зображення
        } else if(true){
            e.target.src = fallback;
            }
    }

    const [Click, setClick] = useState(false);
    let handleClick = function(){
        setClick(true)
    }

    

    let handleClose = function(data){
        setClick(data)
    }

    return (
        <div className="film_field">
            <img className='image_film' src={image} alt="green book image" style={{height:'400px', width:'250px'}}
            onError={handleError} />
            <li className="num_list">
                <div className="lable">{props.lable}  ({props.year}) [{props.rate}]
                    
                    <p className='more_info' onClick={handleClick}>Click for more...</p>
                    {Click && <Modal_s {...props} onClose={handleClose}/>}
                </div>
            </li>
            
        </div>
    )
}