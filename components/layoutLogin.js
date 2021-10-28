/*------------ Imports ---------*/

import Navbar from './navbar'
import Footer from './footer'
import Head from 'next/head'
import Header from './Header'
import PropTypes from 'prop-types'


/*------- Default Page Layout ------*/

const LayoutLogin = ({ children }) => (
    <>
        <Head>
            <title>Digital Dirt</title>
        </Head>
        <div className="dashboard is-full-height">
      <Navbar></Navbar>
            <div className="dashboard-main">
                <Header />
                <div className="block flexGrow">
                    <main className="centerLoginButtons">
                        <div className="columns is-centered is-multiline">{children}</div>
                    </main>
                </div>
                <Footer></Footer>
            </div>
        </div>
    </>
)
export default LayoutLogin

LayoutLogin.propTypes = {
    children: PropTypes.node,
}
