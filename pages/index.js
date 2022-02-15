import { Fotter } from '../components/Fotter'
import Header from '../components/Header'
import Main from '../components/Main'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'


export default function Home() {
  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";
    return () => {
      document.body.style.backgroundColor = "";
    }
  },[]);

  return (
    <div className={styles.container}>
      <Header/>
      <Main title="index"/>
      <Fotter />
    </div>
  )
}
