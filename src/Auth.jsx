import './css/Auth.css'
import Button from './Button'

export default function Auth({onClose}){
    const Close = function(){
        onClose(false)
    }

    return(
        <div className="auth">
            <p className='text'>Register/Login</p>

            <input className='input-field' type="text" name="email" id="email" />
            <input className='input-field' style={{marginTop:'0px', marginBottom:'0px'}} type="password" />
            <Button Name={'Entry'} type={'submit'}/>

            <span className='close' onClick={Close}>&times;</span>
        </div>
    )
}