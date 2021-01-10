import React, { useState, useEffect } from 'react'
import Input from '../../components/Input'


const FirstStep = (props: any) => {
    const { changeStep, onSubmitFirstValue, valueFirstStep } = props
    const [numberDocument, setNumberDocument] = useState('')
    const [names, setNames] = useState('')
    const [firstLastname, setFirstLastname] = useState('')
    const [secondLastname, setSecondLastname] = useState('')
    const [gender, setGender] = useState('')
    const [onlySecurity, setOnlySecurity] = useState('')
    const [date, setDate] = useState('')

    const validate = numberDocument && names && firstLastname && secondLastname && gender && onlySecurity

    const handleChangeNames = (e: any) => {
        setNames(e.target.value)
    }

    const changeNumber = (e: any) => {
        setNumberDocument(e.target.value)
    }

    const handleChangeFirst = (e: any) => {
        setFirstLastname(e.target.value)
    }

    const handleChangeSecond = (e: any) => {
        setSecondLastname(e.target.value)
    }

    const onChangeGender = (e: any) => {
        setGender(e.target.value)
    }

    const onChangeOnlySecurity = (e: any) => {
        setOnlySecurity(e.target.value)
    }

    const onNext = () => {
        let value = {
            names,
            numberDocument,
            firstLastname,
            secondLastname,
            gender,
            onlySecurity
        }
        changeStep('next')
        onSubmitFirstValue(value)
    }

    useEffect(() => {
        setNames(valueFirstStep.nombres)
        setNumberDocument(valueFirstStep.numDocumento)
        setFirstLastname(valueFirstStep.apellidoPaterno)
        setSecondLastname(valueFirstStep.apellidoMaterno)
        setOnlySecurity(valueFirstStep.inCrearTercero)
        setGender(valueFirstStep.sexo)
        setDate(valueFirstStep.fecNacimiento)
    }, [valueFirstStep])


    return (
        <>
            <div>
                <p className='process__form--title' >Hola, <span className='process__form--title-name'>{names}</span></p>
                <span>Valida que los datos sean correctos</span>
            </div>
            <p>Datos personales del titular</p>
            <div>
                <div className='login__form--document'>
                    <select className='form__document--type'>
                        <option>DNI</option>
                    </select >
                    <input
                        onChange={changeNumber}
                        value={numberDocument}
                        placeholder='Nro. de documento'
                        className='form__document--number'
                    />
                </div>
                <div className='form__document--item'>
                    <Input
                        name='names'
                        value={names}
                        label='Nombres'
                        handleChange={handleChangeNames}
                    />
                </div>
                <div className='form__document--item'>
                    <Input
                        value={firstLastname}
                        name='firtLastname'
                        label='Apellido paterno'
                        handleChange={handleChangeFirst}
                    />
                </div>
                <div className='form__document--item'>
                    <Input
                        value={secondLastname}
                        name='secondaLastname'
                        label='Apellido materno'
                        handleChange={handleChangeSecond}
                    />
                </div>
                <div className='form__document--item'>
                    <input
                      value={date}
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
            </div>
            <div>
                <p>Genero</p>
                <div>
                    <div onChange={onChangeGender} style={{display: 'flex', flexDirection: 'column'}}>
                        <div style={{ display: 'flex' , alignItems: 'center'}}>
                            <input type='radio'  value='M' name='gender'/> Masculino
                        </div>
                        <div style={{ display: 'flex' , alignItems: 'center'}}>
                            <input type='radio' value='F' name='gender' /> Femenino
                        </div>
                    </div>
                </div>
                <p>¿A quien vamos a asegurar</p>
                <div>
                    <div onChange={onChangeOnlySecurity} style={{display: 'flex', flexDirection: 'column'}}>
                        <div style={{ display: 'flex' , alignItems: 'center'}}>
                            <input type='radio' value='only' name='cantPeople' /> Solo a mi
                        </div>
                        <div style={{ display: 'flex' , alignItems: 'center'}}>
                            <input type='radio' value='much' name='cantPeople'/> A mi y a mi familia
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <button disabled={!!!validate} className={`content-button__button--${validate ? 'active' : 'disable'}`}  onClick={onNext}>
                        CONTINUAR
                    </button>
                </div>
            </div>
        </>
    )
}

export default FirstStep