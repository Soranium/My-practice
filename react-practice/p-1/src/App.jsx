import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //useStateでカウントの保持を宣言
  const [count, setCount] = useState(0)
  // useEffectでカウントが変化したときに実行する処理を宣言
  useEffect(() => {
    console.log("change count!" + count);
  }, [count]);

//ボタンがクリックされたときにカウントを増やす関数 handleclick
  function handleclick() {
    setCount(count + 1)//+1
  }
  

  return (
    <>
      <div className="App">
          <h1>カウント</h1>
          <button onClick={handleclick}>
           count ++{count}
          </button>
      </div>
    </>
  )
}

export default App
