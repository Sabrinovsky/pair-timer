import React, { useState, useEffect } from 'react'
import { formatTime } from './services/timerFormater'

export const Timer = () => {
  const [time, setTime] = useState(1500)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(time - 1)
    }, 1000)

    return () => clearInterval(intervalId)
  }, [time])

  return (
    <span>
      {formatTime(time)}
    </span>
  )
}
