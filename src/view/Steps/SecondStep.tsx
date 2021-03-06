import React, { useState } from 'react'
import Input from '../../components/Input'
import iconArrowBottom from '../../images/bottom.svg'
import correct from '../../images/correct.png'
import { useForm } from "react-hook-form";
import Table from './Table'

const SecondStep = (props: any) => {
  const { changeStep } = props
  const [cardActive, setCardActive] = useState(1)
  const plan = [
    {
      id: 1,
      mount: 160,
      type: 'BASICO',
      detail: {
        coverage: '1MM',
        zone: true,
        locals: true,
        medicDelivery: false,
        checked: false,
        refundNacionality: false,
        refundInternational: false
      }
    },
    {
      id: 2,
      mount: 200,
      type: 'AVANZADO'
    },
    {
      id: 3,
      mount: 250,
      type: 'PREMIUN'
    },
    {
      id: 4,
      mount: 500,
      type: 'FULL'
    }
  ]

  const cardSelect = (id: number) => {
    setCardActive(id)
  }


  return (
    <>
      <div>
        <p className='process__form--title'>Elige <span className='process__form--title-name'>tu proteccion</span></p>
        <span>Selecciona tu plan ideal</span>
      </div>
      <div style={{ display: 'flex', marginBottom: 20}}>
        {
          plan.map( (e) => (
            <div className={`card-${e.id === cardActive ? 'active' : 'disable'}`} key={e.id} onClick={() => cardSelect(e.id)}>
              <div style={{ height: 20, display: 'flex', justifyContent:'flex-end'}}>
                {
                  e.id === cardActive ?
                    <img src={correct} width='20px'/>
                  :
                    null
                }
              </div>
              <p className='card__title'>{e.type}</p>
              <div style={{ display: 'flex'}}>
                <span className='card__content__mount'>S/</span><span className='card__mount'>{e.mount}</span>
              </div>
              <p className='card__recurrent'>mensual</p>
            </div>
          )
          )
        }
      </div>
      <Table cardId={cardActive}/>
      <div style={{marginTop: 35}}>
        <p className='process__review'>Revisa nuestros</p>
        <div className='process__options'>
          <p className='process__services'>servicios y exclusiones</p>
        </div>
        <div className='process__options'>
          <p className='process__services-all'>Servicios brindados</p>
          <img src={iconArrowBottom} />
        </div>
        <div className='process__options'>
          <p className='process__services-all'>Exclusiones</p>
          <img src={iconArrowBottom}/>
        </div>
      </div>
      <div style={{ marginTop: 35}}>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <p className='send-email'>ENVIAR COTIZACION POR CORREO</p>
          <button className='content-button__button' onClick={ () => changeStep('next') }>
            COMPRAR PLAN
          </button>
        </div>
      </div>
    </>
  )
}

export default SecondStep