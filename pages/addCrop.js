/*____________Imports_________________*/

import Layout from '../components/layout'
import AddCrop from '../components/pageContent/AddCrop'
import { getSession } from "next-auth/react";

/*____________________________________*/


const  Home = () => (
    <Layout>
        <AddCrop></AddCrop>
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