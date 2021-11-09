/*____________Imports_________________*/

import Layout from '../components/layout'
import CropTable from '../components/CropTable'
import CropCounter from '../components/CropCounter'
import { server } from '../config'
import { getSession, useSession } from 'next-auth/react'

/*____________________________________*/


export default function CropAnalyticsContent({ crops }) {

    const { data: session, status } = useSession()
    return (
        <Layout>
            <div className="section">

                <div className="level is-hidden-mobile">
                    <div className="level-left">
                        <p className="title is-size-2 is-spaced">Reports</p>
                    </div>
                    <div className="level-right">
                        <a className="button is-dark" href="/addReport">Add Report</a>
                    </div>
                </div>

                <hr className="is-hidden-mobile"></hr>

                <section className="content is-small">
                    <h1 className="title">BLANK SPACE</h1>
                </section>

                <hr />

                <div className="is-hidden-desktop">
                    <div className="is-hidden-desktop">
                        <p className="title is-size-2 is-centered">Crop Analytics</p>
                    </div>
                    <div className="is-centered" id="mobilePaddingTop">
                        <a className="button is-dark" href="/addCrop">Add Crop</a>
                    </div>
                </div>

                <div className="hero is-centered">
                    <div className="hero-body">
                        <div className="b-table has-pagination">
                            <div className="table-wrapper has-mobile-cards">
                                <table className="table is-fullwidth is-striped is-hoverable is-fullwidth">
                                    <thead>
                                        <tr>
                                            <th>
                                                <abbr title="Name">Name</abbr>
                                            </th>
                                            <th>
                                                <abbr title="Hydration">Current Hydration Level</abbr>
                                            </th>
                                            <th>
                                                <abbr title="Infestation">Current Infestation Level</abbr>
                                            </th>
                                            <th>
                                                <abbr title="Created">Created</abbr>
                                            </th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {reports.map((report, i) => (
                                            <ReportTable report={report} key={i} />
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}


export async function getServerSideProps(ctx) {

    // request crop data from api
    let response = await fetch(`${server}/api/reports`)

    // extract the data
    let data = await response.json()
    //console.log(data)

    return {
        props: {
            reports: data['message']
        },
    }
}
