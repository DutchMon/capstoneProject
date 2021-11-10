/*------------ Imports ---------*/

import Navbar from './navbar'
import Footer from './footer'
import Head from 'next/head'
import Header from './Header'
import PropTypes from 'prop-types'


/*------- Default Page Layout ------*/

const LayoutDashboard = ({ children }) => (
	<>
		<Head>
			<title>Digital Dirt</title>
		</Head>
		<div className="dashboard is-full-height">
			<Navbar></Navbar>
			<div className="dashboard-main">
				<Header />
				<div className="block flexGrow scroll contentHeight">
					<main>
						<div className="dashboardChart">{children}</div>
					</main>
				</div>
			</div>
		</div>
	</>
)
export default LayoutDashboard

LayoutDashboard.propTypes = {
	children: PropTypes.node,
}
