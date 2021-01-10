import React from 'react'
import security from '../../images/segurity.png'
import mobile from '../../images/mobile.png'


const Information = () => {
    return (
        <div className='content-information'>
            <div>
                <p className='content-information__title'>Seguro de <br /><span className='title__salud'>Salud</span></p>
                <div>
                    <div style={{ marginBottom: 20, display: 'flex', alignItems:'center'}}>
                        <img src={security} alt='seguro' width='20px' style={{marginRight: 10}}/>
                        <span>Cómpralo de manera facil y rapida</span>
                    </div>
                    <div style={{ marginBottom: 20, display: 'flex', alignItems:'center'}}>
                        <img src={mobile} alt='mobile' width='20px'style={{marginRight: 10}}/>
                        <span>Cotiza y compra tu seguro 100% digital</span>
                    </div>
                    <div style={{ marginBottom: 20, display: 'flex', alignItems:'center'}}>
                        <img src={security} alt='seguro' width='20px'style={{marginRight: 10}}/>
                        <span>Hasta S/. 12 millones de cobertura anual</span>
                    </div>
                    <div style={{ marginBottom: 15, display: 'flex', alignItems:'center'}}>
                        <img src={mobile} alt='mobile' width='20px'style={{marginRight: 10}}/>
                        <span>Más de 300 clinicas en todo el Perú</span>
                    </div>
                </div>
            </div>
            <div>
                <span> © 2021 y Company</span>
            </div>
        </div>
    )
}

export default Information