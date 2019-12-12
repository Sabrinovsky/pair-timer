import React, { useState, useEffect } from 'react'
import './main.css'
import { Timer } from './Timer'

function Main () {
  const [pause, setPause] = useState(true)
  const [initialDate, setIninitalDate] = useState(null)

  useEffect(() => {
    Notification.requestPermission()
  })

  const start = () => {
    if (!initialDate) setIninitalDate(new Date().getTime())
    setPause(!pause)
  }

  return (
    <>
      <header />
      <div className='container'>
        <div className='circle'>
          <div className='inner-circle'>
            <Timer pause={pause} initialDate={initialDate}/>
          </div>
        </div>
        <div className='btn' onClick={start}>
          {pause
            ? <img width='50px' src="play-button-arrowhead.svg" alt="Kiwi standing on oval"></img>
            : <img width='50px' src="pause-button.svg" alt="Kiwi standing on oval"></img>
          }
        </div>
      </div>
      <footer />
    </>
  )
}

export default Main
