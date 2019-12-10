import React, { useState, useEffect } from 'react'
import { formatTime } from './services/timerFormater'

export const Timer = ({ pause, initialDate }) => {
  const [time, setTime] = useState('25:00')
  const [working, setWorking] = useState(true)
  const [workTime, setWorkTime] = useState(1)

  useEffect(() => {
    if (time === '0:0') {
      setTime(working ? '5:00' : '25:00')
      setWorkTime(working ? 5 : 25)
      setWorking(!working)
      // eslint-disable-next-line
      new Notification(working ? 'Take a break' : 'Focus on code!')
    }

    if (!pause) {
      setInterval(() => {
        const teste = new Date().getTime()
        const distance = (initialDate + workTime * 60000) - teste

        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((distance % (1000 * 60)) / 1000)

        setTime(minutes + ':' + seconds)
      }, 100)
    }
  })

  return (
    <span>
      {time}
    </span>
  )
}
