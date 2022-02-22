import { Fotter } from '../components/Fotter'
import Header from '../components/Header'
import Main from '../components/Main'
import { useCallback, useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'


export default function Home() {

  const [count,setCount] = useState(1);
  const [isShow,setIsShow] = useState(true);
  const [text,setText] = useState("");

  const hendleClick = useCallback(() => {
    setCount((count) => count + 1);
  },[count]);

  const handleDisplay = useCallback(() => {
    console.log(isShow);
    setIsShow((isShow) => !isShow);
  },[]);

  const handleText = useCallback((e) => {
    setText(e.target.value);
  },[text]);

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";
    return () => {
      document.body.style.backgroundColor = "";
    }
  },[]);

  return (
    <div className={styles.container}>
      <Header/>
      { isShow ? <h1>{ count }</h1> : null }
      <div>
        <button
          onClick={hendleClick}>
            ボタン
        </button>
        <button
          onClick={handleDisplay}
        >
            { isShow ? "非表示" : "表示" }
        </button>
      </div>
      <input type="text" value={ text } onChange={handleText} />
      <button>
        追加
      </button>
      <Main title="index"/>
      <Fotter />
    </div>
  )
}
