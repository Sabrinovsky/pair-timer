import React, { useState } from 'react'
import './main.css'
import { Timer } from './Timer'

function Main () {
  const [pause, setPause] = useState(true)
  return (
    <>
      <header />
      <div className='container'>
        <div className='circle'>
          <div className='inner-circle'>
            <Timer pause={pause}/>
          </div>
        </div>
        <div className='btn' onClick={() => setPause(!pause)}>
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
