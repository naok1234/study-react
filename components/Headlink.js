import Link from "next/link"
import styles from "./Headlink.module.css"

export function Headlink() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a className={styles.anchor}>Index</a>
      </Link>
      <Link href="/about">
        <a className={styles.anchor}>About</a>
      </Link>
    </header>
  );
}