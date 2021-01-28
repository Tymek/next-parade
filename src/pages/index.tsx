import styles from '../styles/Home.module.css'
import parade from '../../lib'
import withStaticProps from '../../lib/withStaticProps'

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

// export default ComponentsParade // without container override?

// export const getStaticProps: GetStaticProps = async (context) => { // additional props?
//   return withStaticProps(context)
// }
