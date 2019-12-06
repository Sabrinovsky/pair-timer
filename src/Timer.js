import React, { useState, useEffect } from 'react'
import { formatTime } from './services/timerFormater'

export const Timer = ({ pause }) => {
  const [time, setTime] = useState(1500)
  const [working, setWorking] = useState(true)

  useEffect(() => {
    if (time < 0) {
      setTime(working ? 300 : 1500)
      setWorking(!working)
    }

    if (!pause) {
      const intervalId = setInterval(() => {
        setTime(time - 1)
      }, 1000)
      return () => clearInterval(intervalId)
    }
  }, [time, pause])

  return (
    <span>
      {formatTime(time)}
    </span>
  )
}
