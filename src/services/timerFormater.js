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

export const formatTime = (time) => {
  const seconds = transformSeconds(time)
  const minutes = transformMinutes(time)

  return `${minutes}:${seconds}`
}
