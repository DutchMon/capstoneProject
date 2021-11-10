/*____________Imports_________________*/

import Layout from '../components/layout'
import EditCrop from '../components/pageContent/EditCrop'
import { getSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { server } from '../config'

/*____________________________________*/


export default function Home({ }) {
    const router = useRouter()

    console.log("---------------cropObject----------- ", router.query)

    return (
        <Layout>
                <EditCrop cropObject={router.query} />
        </Layout>
    )
}
