import Head from 'next/head'
import styles from '../styles/Home.module.css'
import parade from '../parade'

const ParadeComponents = parade(require.context('../', true, /[A-Z].*\.tsx/))

export default function Home() {
  return (
    <div className={styles.container}>
      <ParadeComponents />
    </div>
  )
}
