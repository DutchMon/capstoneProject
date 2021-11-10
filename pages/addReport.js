/*____________Imports_________________*/

import Layout from '../components/layout'
import AddReport from '../components/pageContent/AddReport'
import { getSession } from "next-auth/react";

/*____________________________________*/


const  Home = () => (
    <Layout>
        <AddReport></AddReport>
    </Layout>
)

export default Home

export async function getServerSideProps(ctx) {
  return {
    props: {
        session: await getSession(ctx)
    }
  }
}