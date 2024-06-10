/* eslint-disable react/prop-types */
//import React from 'react'
import Wrapper from './Wrapper'
import ExerciseCard from './ExerciseCard'

export default function Workout(props) {
  const {workout} = props
  return (
    <Wrapper id={'workout'} title={['Your', 'CURATED', 'sets']}>
      <div>
        {workout.map((exercise, i) => {
          return(
            <ExerciseCard i={i} exercise={exercise} key={i} />
          )
        })}
      </div>
    </Wrapper>
  )
}
