/*____________Imports_________________*/

import Layout from '../components/layout'
import HomeContent from '../components/pageContent/HomeContent'
import { getProviders, getSession } from "next-auth/react"

/*____________________________________*/



const  Home = () => (
    <Layout>
        <HomeContent></HomeContent>
    </Layout>
)

export default Home
