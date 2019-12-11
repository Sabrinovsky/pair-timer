import React, { useState, useEffect } from 'react'
import { formatTime } from './services/timerFormater'

export const Timer = ({ pause, initialDate }) => {
  const [clock, setClock] = useState('25:00')
  const [working, setWorking] = useState(true)
  const [minutesToRun, setMinutesToRun] = useState(0)
  const [pomodoros, setPomodoros] = useState(0)

  useEffect(() => {
    if (pomodoros === 4) {
      setPomodoros(0)
      setMinutesToRun(minutesToRun + 15)
      setClock('15:00')
      // eslint-disable-next-line
      if (initialDate) new Notification('Take a long break')
    } else {
      if (working) setPomodoros(pomodoros + 1)
      const minutesToAdd = working ? 25 : 5
      setMinutesToRun(minutesToRun + minutesToAdd)
      setClock(working ? '25:00' : '5:00')
      // eslint-disable-next-line
      if (initialDate) new Notification(working ?  'Focus on code!' : 'Take a break')
    }
  }, [working])

  useEffect(() => {
    if (!pause && clock !== '0:0') {
      const interval = setInterval(() => {
        const now = new Date().getTime()
        const distance = (initialDate + minutesToRun * 60000) - now
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((distance % (1000 * 60)) / 1000)

        if (minutes === 0 && seconds === 0) {
          clearInterval(interval)
          setWorking(!working)
        } else {
          setClock(minutes + ':' + seconds)
        }
      }, 900)
      return () => clearInterval(interval)
    }
  }, [clock, initialDate])

  return (
    <span>
      {clock}
    </span>
  )
}
