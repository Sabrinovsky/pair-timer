import React from 'react'
import './main.css'
import { Timer } from './Timer'

function Main () {
  return (
    <>
      <header />
      <container>
        <div className="circle">
          <div className="inner-circle">
            <Timer />
          </div>
        </div>
      </container>
      <footer />
    </>
  )
}

export default Main
