import React, {useState, useEffect} from 'react'
import Input from '../../components/Input'
import FirstStep from './FirstStep'
import axios from 'axios'
import SecondStep from './SecondStep'
import ArrowBack from '../../images/arrow-back.svg'
import { withRouter } from 'react-router'

const StepsRouter = (props:any) => {
  const { history } = props
  const [step, setStep] = useState(1)
  const [valueFirstStep, setValueFirstStep] = useState({})

  useEffect(() => {
    axios.post(`https://freestyle.getsandbox.com/dummy/obtenerdatospersona`, {})
        .then(res => {
          const persons = res.data.data.tercero;
          setValueFirstStep(persons)
        })
  }, [step,])

  const changeStep = (value: string) => {
    let actual = step 
    if(value === 'next') {
      let next = actual + 1
      if(step === 2) {
        history.push('/thanks')
      } else {
        setStep(next)
      }
    } else if(step === 1) {
      history.push('/')
    } else {
      let back = actual - 1
      setStep(back)
    }
  }

  const onSubmitFirstValue = (value) => {
    setValueFirstStep(value)
  }




  return (
    <div className='content__process'>
      <div className='content__login--information'>
        <div className='process__information--text' />
        <div className='login__information--inclination'>
          <div className='inclination' />
        </div>
      </div>
      <div className='process__form'>
        <div style={{ padding: '0 13%', display:'flex', alignItems: 'center'}}>
          <div className='process__form--icon' onClick={() => changeStep('back')}>
            <img src={ArrowBack} width="15px" height="15px"/>
          </div>
          <div style={{marginLeft: 10}}>
            <p ><span className="process__form--text-blue">{`PASO ${step}`}</span> DE 2</p>
          </div>
        </div>
        <div className='form'>
          {
            step === 1 ?
              <FirstStep changeStep={changeStep} onSubmitFirstValue={onSubmitFirstValue} valueFirstStep={valueFirstStep}/>
            :
              <SecondStep changeStep={changeStep}  />
          }
        </div>
      </div>
    </div>
  )
}
const Steps = withRouter(StepsRouter)

export default Steps