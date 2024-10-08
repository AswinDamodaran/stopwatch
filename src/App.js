
import './App.css';
import { useEffect, useState } from 'react';



function App() {


  const [timer, setTimer] = useState(0)
  const [flag, setFlag] = useState(false)

  const handleStart = () => {
    setFlag(!flag)

  }



  const setReset = () => {
    setTimer(0)
    setFlag(false)
  }


  useEffect(() => {
    let timerId
    if (flag) {
      timerId = setInterval(() => {
        setTimer((prev) => prev + 1)
      }, 1000);
    } else {
      clearInterval(timerId)
    }
    return () => clearInterval(timerId)
  }, [flag])

  const formatTime = (sec) => {
    const seconds = sec % 60
    const minutes = Math.floor(sec / 60)
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
  }

  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <p>Time: {formatTime(timer)}</p>
      <button onClick={handleStart}>{flag ? `Stop` : `Start`} </button>
      <button onClick={setReset} >Reset</button>
    </div>
  );
}

export default App;
