/*____________Imports_________________*/

import Layout from '../components/layout'
import EditReport from '../components/pageContent/EditReport'
import { getSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { server } from '../config'

/*____________________________________*/


export default function Home({ }) {
    const router = useRouter()

    return (
        <Layout>
                <EditReport reportObject={router.query} />
        </Layout>
    )
}
