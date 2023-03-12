import React, { useState } from 'react'
import './stylecss/joke.css'

export const JokePunch = (props) => {
  const [isshown,setIsshown]=useState(false)
  function valueChange(){
    setIsshown(!isshown)
    console.log(isshown)
  }
  return (
    <div className='marg display-6'>
        <div className='box'>
            <div className='padd'>
                <p>Joke : {props.data1}</p> 
                {isshown? <p className='punchsize'>{props.data2}</p>:""}
            </div>
            <button onClick={valueChange} className="btn btn-warning">{isshown?"Hide":"Show"} Punchline</button>
        </div>
    </div>
  )
}
