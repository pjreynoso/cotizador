import React from 'react'
import { withRouter } from 'react-router'

const ThanksRouter = () => {
    return(
        <>
        <div className='content__process'>
            <div className='content__login--information'>
              <div className='process__information--text' />
              <div className='login__information--inclination'>
                <div className='inclination' />
              </div>
            </div>
            <div className='content__thanks'>
                <p className='process__form--title'>Gracias por <span className='process__form--title-name'>confiar en <br/> nosotros!</span></p>
                <p>Queremos conocer mejor la salud de los segurados. Un asesor <span>se <br/> pondra en contacto contigo en las siguientes 48 horas</span></p>
                <div>
                    <button className='content-button__button'>
                        IR A SALUD
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}

const Thanks = withRouter(ThanksRouter)

export default Thanks