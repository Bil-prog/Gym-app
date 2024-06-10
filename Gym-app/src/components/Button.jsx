/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'

export default function Button(props) {
    const {text, func } = props;
  return (
    <button onClick={func} className='px-8 mx-auto py-4 rounded-md border-[2px] bg-amber-950 border-amber-400 border-solid duration-200 hover:border-amber-600'>
        <p>{text}</p>
    </button>
  )
}
