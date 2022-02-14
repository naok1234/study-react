import Headline from '../components/Headline'
import { Links} from '../components/LInks'
import styles from '../styles/Home.module.css'

export default function Main(props) {
  return (
    <div>
      <main className={styles.main}>
        <Headline title={props.title}/>
        <Links />
      </main>
    </div>
  )
}
