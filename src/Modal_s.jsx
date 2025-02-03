import './css/Modal.css'

export default function Modal_s({onClose, ...props}){

    const Closer = function(){
        onClose(false)
    }

    return(
        <div className="modal">
            
            <span className='closer' onClick={Closer}>&times;</span>
            <span style={{fontSize:'40px', margin:'20px', display:'block'}}>{props.lable}</span>
            <span className='line'>Year: {props.year}</span>
            <span className='line'>Episodes: {props.episodes}</span>
            <span className='line'>Type: {props.type}</span>
            <span className='line'>Description: {props.describe}</span>

            </div>
    )
}