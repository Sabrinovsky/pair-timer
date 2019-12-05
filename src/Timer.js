import React, { useState, useEffect } from 'react'

export const Timer = () => {
  const [time, setTime] = useState(1500)
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(time - 1)
    }, 1000)

    return () => clearInterval(intervalId)
  }, [time])

  const transformSeconds = (time) => {
    const seconds = (time % 60)
    if (seconds === 0) return '00'
    return (seconds < 10 ? '0' + seconds : seconds)
  }

  const transformMinutes = (time) => {
    const minutes = Math.floor((time / 60).toFixed(2))
    if (minutes < 10) return '0' + minutes
    if (time > 60) return minutes
  }

  const transformTime = (time) => {
    const seconds = transformSeconds(time)
    const minutes = transformMinutes(time)

    return `${minutes}:${seconds}`
  }

  return (
    <span>
      {transformTime(time)}
    </span>
  )
}
