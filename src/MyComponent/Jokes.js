import React from 'react'
import './stylecss/style1.css'
export const Jokes = () => {
  return (
    <div className='bordering'>
        <img className="mx-4 my-2" src={require('./jokes.png')}  hight={"50vh"} width={"80px"} alt="hello"/>
    </div>
  )
}
