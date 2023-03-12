import React from 'react'
import './stylecss/joke.css'
export const JokePunch = (props) => {
  return (
    <div className='marg'>
        <div className='box'>
            <div className='padd'>
                <p>Joke : {props.setup}</p> 
                <p>PunchLine : {props.punchline}</p> 
            </div>
        </div>
    </div>
  )
}
