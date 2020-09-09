import Header from '../components/header'
import Footer from '../components/footer'
import Sidenav from './SideNav'
import Navbar from './Navbar'
import Grid from '@material-ui/core/Grid';

const styles = {
  maxWidth: 680
}

export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children }) {
  return (
    <>
      {/* <Navbar /> */}
      <Sidenav />
      {/* <Header /> */}

      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <main style={styles}>
          {children}
        </main>
        <div  style={{width:`100%`}}></div>
        <Footer />

      </Grid>
    </>
  )
}