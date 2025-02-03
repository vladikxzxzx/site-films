import './css/Button.css'
export default function Button({Name, type}){
    
    return(
        <button className='mainB' type={type}>{Name}</button>
    )
}