import { useState,useRef } from 'react';

const useCountdown = (
  initial: number
) => {
  const [count, setCount] = useState(initial);
  const [timeStatus, setTimeStatus] = useState(false);
  const timer = useRef<any>()
  const countdown = () => {
    setCount(count => {
      if (count > 0) {
        return count-1
      } else {
        clearInterval(timer.current)
        setTimeStatus(false)
        return initial
      }
    })
  }
  const start = () => {
    setTimeStatus(true)
    timer.current=setInterval(countdown,1000)
  }

  return { count, start, timeStatus };
};

export default useCountdown