import React, {useState} from 'react'
import Input from '../../components/Input'
import {
  Link
} from "react-router-dom";
import Information from './Information'

const Login = () => {
  const [phone, setPhone] = useState('')
  const handleChange = (e:any) => {
    setPhone(e.target.value)
  }

  const  handleSubmit  = (event: any) => {
     event.preventDefault();
  }


  return(
    <div className='content__login'>
      <div className='content__login--information'>
        <div className='login__information--text'>
          <Information />
        </div>
        <div className='login__information--inclination'>
          <div className='inclination' />
        </div>
      </div>
      <div className='content__login--form'>
        <form onSubmit={handleSubmit}>
        <div>
          <p className='login__form--title'>Obtén tu <span className='form__title--sure'>seguro ahora</span></p>
          <span>Ingres los datos para comenzar</span>
        </div>
        <div className='login__form--document'>
          <select className='form__document--type'>
            <option>DNI</option>
          </select >
          <input
            placeholder='Nro. de documento'
            className='form__document--number'
          />
        </div>
        <div style={{ width: '100%'}}>
          <input
            placeholder="Fecha de nacimiento"
            name='date'
            type="text"
            onBlur={
              (e) => {
                e.currentTarget.type = 'date';
              }
            }
            onFocus={
              (e) => {
                e.currentTarget.type = 'date';
                e.currentTarget.focus()
              }
            }
            className='form__document--input-date'
          />
        </div>
        <div>
          <Input 
            value={phone}
            name='phone'
            label='Celular'
            handleChange={handleChange}
          />
        </div>
        <div>
          <div className='content-terms'>
            <input type='checkbox' className='content-terms__input' />
            <p className='terms'>
              Acepto la <span>Politica de proteccion de datos <br/> Personales y los Terminos y Condiciones</span>
            </p>
          </div>
          <div className='content-terms'>
            <p>
              <input type='checkbox' id="checkbox2" className='content-terms__input' />
            </p>
            <label htmlFor="checkbox" className="content-terms__input">
              <p className='terms'>
                Acepto la politica de envio de <br/> <span>Comunicaciones Comerciales </span>
              </p>
            </label>
          </div>
        </div>
        <div className='content-button'>
          <button className='content-button__button' type="submit">
            <Link to="/process" style={{ color: 'white', textDecoration: 'none'}}>
              COMENCEMOS
            </Link>
            </button>
        </div>
      </form>
      </div>
    </div>
  )
}

export default Login