import { Fotter } from '../components/Fotter'
import Header from '../components/Header'
import Main from '../components/Main'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header/>
      <Main title="index"/>
      <Fotter />
    </div>
  )
}
