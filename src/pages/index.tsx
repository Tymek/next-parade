import styles from '../styles/Home.module.css'
import parade from '../parade'
import withStaticProps from '../parade/withStaticProps'

const context = require.context('../components', true, /[A-Z].*\.tsx/)
const ComponentsParade = parade(context)

const Home = ({ ...props }) => {
  return (
    <div className={styles.container}>
      <ComponentsParade {...props} />
    </div>
  )
}
export default Home

export const getStaticProps = withStaticProps(context)

/* alternatives */

// export default ComponentsParade

// export const getStaticProps: GetStaticProps = async (context) => {
//   return withStaticProps(context)
// }
