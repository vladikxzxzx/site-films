import './css/Modal.css'

export default function Modal({onClose, ...props}){

    const Closer = function(){
        onClose(false)
    }

    return(
        <div className="modal">
            
            <span className='closer' onClick={Closer}>&times;</span>
            <span style={{fontSize:'40px', margin:'20px', display:'block'}}>{props.lable}</span>
            <span className='line'>Genre: {props.genre}</span>
            <span className='line'>Runtime: {props.runtime}</span>
            <span className='line'>Director: {props.director}</span>
            <span className='line'>Country: {props.country}</span>
            <span className='line'>Actors: {props.actors}</span>
            <span className='line'>Plot: {props.describe}</span>

            </div>
    )
}