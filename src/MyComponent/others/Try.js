import React from 'react'

export const Try = () => {
    const fName='Mohsin'
    const Lname="Khwaja"
    const date=new Date()
    const hours=date.getHours()
    const mints=date.getMinutes()
    const time=hours%12
    let greetings;
    let ampm;
    if(hours<12){
        ampm="am"
        greetings="Good Morning"
    }
    else if(hours>12){
        ampm="pm"
        if(hours>12 && hours<16){
            greetings="Good Afternoon"
        }
        if(hours>15 && hours<24){
            greetings="Good Night"
        }
    }
  return (
    <div>
        <h1>{greetings} {fName} {Lname} !</h1>
        <h1>You know it is about {time} : {mints} {ampm}</h1>
    </div>
  )
}
