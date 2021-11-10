/*____________Imports_________________*/

import Layout from '../components/layout'
import ReportTable from '../components/ReportTable'
import CropCounter from '../components/CropCounter'
import { server } from '../config'
import { getSession, useSession } from 'next-auth/react'
import LayoutDashboard from '../components/layoutDashboard'

/*____________________________________*/


export default function Reports({ reports }) {

    const { data: session, status } = useSession()
    return (
        <Layout>
            <section className="hero box opacityLayer contentHeight">
                <div className="hero-body">
                    <div className="container">
                        <div className="level is-hidden-mobile">
                            <div className="level-left">
                                <p className="title is-size-2 is-spaced">Reports</p>
                            </div>
                            <div className="level-right">
                                <a className="button is-dark" href="/addReport">Create Report</a>
                            </div>
                        </div>

                        <hr className="is-hidden-mobile"></hr>

                        <section className="content">
                            <div className="is-hidden-desktop">
                                <div className="is-hidden-desktop">
                                    <p className="title is-size-2 is-centered">Reports</p>
                                </div>
                                <div className="is-centered" id="mobilePaddingTop">
                                    <a className="button is-dark" href="/addReport">Create Report</a>
                                </div>
                            </div>
                            <div className="b-table has-pagination box">
                                <div className="table-wrapper has-mobile-cards">
                                    <table className="table is-fullwidth is-striped is-hoverable">
                                        <thead>
                                            <tr className="has-text-centered">
                                                <th>
                                                    <abbr title="Name">Name</abbr>
                                                </th>
                                                <th>
                                                    <abbr title="Hydration">Current Expected Yield</abbr>
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
                        </section>


                    </div>
                </div>
            </section>
        </Layout>
    )
}


export async function getServerSideProps(ctx) {

    // request report data from api
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
