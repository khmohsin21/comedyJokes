import React from 'react'
import { Navair } from './Navair'
export const Jokes = () => {
  return (
    <div>
        <Navair img={require('./jokes.png')} data={Jokes} hight={"50vh"} width={"80px"} />
    </div>
  )
}
