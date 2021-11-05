/*------------ Imports ---------*/

import Navbar from './navbar'
import Footer from './footer'
import Head from 'next/head'
import Header from './Header'
import PropTypes from 'prop-types'


/*------- Default Page Layout ------*/

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Digital Dirt</title>
    </Head>
    <div className="dashboard is-full-height">
      <Navbar></Navbar>
      <div className="dashboard-main is-scrollable">
        <Header />
        <div className="block flexGrow scroll">
          <main>
            <div className="dashboardChart">{children}</div>
          </main>
        </div>
        <Footer></Footer>
      </div>
    </div>

  </>
)
export default Layout

Layout.propTypes = {
  children: PropTypes.node,
}

