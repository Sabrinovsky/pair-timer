import React, { useState, useEffect } from 'react'

export const Timer = () => {
  const [time, setTime] = useState(1500)
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(time - 1)
    }, 1000)

    return () => clearInterval(intervalId)
  }, [time])

  const transformTime = (time) => {
    const secondsToMinutes = Math.floor((time / 60).toFixed(2))
    const seconds = (time % 60)
    /** TODO Refactor**/
    if (time > 60) {
      if (secondsToMinutes < 10) {
        return '0' + secondsToMinutes + ':' + (seconds < 10 ? '0' + seconds : seconds)
      }
      return secondsToMinutes + ':' + seconds
    } else if (seconds < 10) {
      return '01:' + '0' + seconds
    } else {
      return '00:' + seconds
    }
  }

  return (
    <span>
      {transformTime(time)}
    </span>
  )
}
