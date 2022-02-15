import { Fotter } from '../components/Fotter'
import Header from '../components/Header'
import Main from '../components/Main'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'


export default function Home() {

  const [foo,setFoo] = useState(1);

  const hendleClick = (e) => {
    setFoo((foo) => foo + 1);
  };

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";
    return () => {
      document.body.style.backgroundColor = "";
    }
  },[]);

  return (
    <div className={styles.container}>
      <Header/>
      <h1>{foo}</h1>
      <button onClick={hendleClick}>click button!</button>
      <Main title="index"/>
      <Fotter />
    </div>
  )
}
