/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import Wrapper from './Wrapper'
import { SCHEMES, WORKOUTS } from '../Utils/Sets'
import Button from './Button'

function Header(props) {
    const { index, title } = props
    return (
        <div className='flex flex-col gap-4'>
            <div className='flex items-center justify-center gap-2'>
                <p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-amber-400'>{index}</p>
                <h4 className='text-lg'>{title}</h4>
            </div>
            {/* <p className='text-sm sm:text-base mx-auto'>{description}</p> */}
        </div>
    )
}

export default function Generator(props) {
    const { muscles, setMuscles, poison, setPoison, goal, setGoal, updateWorkout } = props
    const [showModal, setShowModal] = useState(false)

    // let showModal = false

    function toggleModal() {
        setShowModal(!showModal)
    }

    function updateMuscles(muscleGroup) {
        if (muscles.includes(muscleGroup)) {
            setMuscles(muscles.filter(val => val !== muscleGroup))
            return
        }

        if (muscles.length > 2) {
            return
        }

        if (poison !== 'individual') {
            setMuscles([muscleGroup])
            setShowModal(false)
            return
        }

        setMuscles([...muscles, muscleGroup])
        if (muscles.length === 2) {
            setShowModal(false)
        }

    }

    return (
        <Wrapper id={'generate'} title={['It\'s', 'Workout', 'o\'clock']}>
            <Header index={'01'} title={'Pick your workout'} />
            <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
                {Object.keys(WORKOUTS).map((type, typeIndex) => {
                    return (
                        <button onClick={() => {
                            setMuscles([])
                            setPoison(type)
                        }} className={'bg-amber-950 border  duration-200 px-4 hover:border-amber-600 py-3 rounded-lg ' + (type === poison ? 'border-4 border-amber-400' : ' border-amber-400')} key={typeIndex}>
                            <p className={'capitalize ' + (type === poison ? 'font-bold' : '')}>
                                {type.replaceAll('_', ' ')}
                            </p>
                        </button>
                    )
                })}
            </div>
            <Header index={'02'} title={'Select the target muscles'} />
            <div className='bg-amber-950  border border-solid border-amber-400 rounded-lg flex flex-col'>
                <button onClick={toggleModal} className='relative p-3 flex items-center justify-center'>
                    <p className='capitalize'>{muscles.length == 0 ? 'Select muscle groups' : muscles.join(' ')}</p>
                    <i className="fa-solid absolute right-3 top-1/2 -tranamber-y-1/2 fa-caret-down"></i>
                </button>
                {showModal && (
                    <div className='flex flex-col px-3 pb-3'>
                        {(poison === 'individual' ? WORKOUTS[poison] : Object.keys(WORKOUTS[poison])).map((muscleGroup, muscleGroupIndex) => {
                            return (
                                <button onClick={() => {
                                    updateMuscles(muscleGroup)
                                }} key={muscleGroupIndex} className={'hover:text-amber-400 duration-200 ' + (muscles.includes(muscleGroup) ? ' text-amber-400' : ' ')}>
                                    <p className='uppercase'>{muscleGroup.replaceAll('_', ' ')}</p>
                                </button>
                            )
                        })}
                    </div>
                )}
            </div>
            <Header index={'03'} title={'Select your ultimate objective'} />
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
                {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
                    return (
                        <button onClick={() => {
                            setGoal(scheme)
                        }} className={'bg-amber-950 border  duration-200 hover:border-amber-600 py-3 rounded-lg px-4 ' + (scheme === goal ? 'border-4 border-amber-400' : ' border-amber-400')} key={schemeIndex}>
                            <p className={'capitalize ' + (scheme === goal ? 'font-bold' : '')}>
                                {scheme.replaceAll('_', ' ')}
                            </p>
                            {/* <p className='capitalize'>{scheme.replaceAll('_', " ")}</p> */}
                        </button>
                    )
                })}
            </div>
            <Button func={updateWorkout} text={"Formulate"}></Button>
        </Wrapper>

    )
}
