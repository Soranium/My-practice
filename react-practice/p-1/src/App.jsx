import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //useStateでカウントの保持を宣言 /useStateは状態を保持して変わった差分をレンダリングする
  const [count, setCount] = useState(0)
  //useRefでカウントの保持を宣言 /useRefは状態を保持するが変わってもレンダリングしない DOM操作にも使う
  const countRef = useRef(0)
  //useEffectは副作用（特定の値の変化を監視、変化後発火）
  useEffect(() => {
    console.log("change count!" + count);
  }, [count]);

  function Effecthandleclick() {
    setCount(count + 1)//+1
  }
  function Refhandleclick() {
    countRef.current = countRef.current + 1;
    alert("Ref count: " + countRef.current);
    
  }

  return (
    <>
      <div className="App">
          <h1>カウント</h1>
          <button onClick={Effecthandleclick}>
           useEffectcount　{count}
          </button>
          <button onClick={Refhandleclick}>
            useRefcount
          </button>
      </div>
    </>
  )
}

export default App
