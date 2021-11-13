/*____________Imports_________________*/

import Layout from '../components/layout'
import CropTable from '../components/CropTable'
import CropCounter from '../components/CropCounter'
import { server } from '../config'
import { getSession, useSession } from 'next-auth/react'

/*____________________________________*/


export default function cropAnalytics({ crops, hydration, infestation }) {

    const { data: session, status } = useSession()
    // sort array
    let sortedHydration = hydration.sort(function (a, b) {
        return new Date(b.hydrationDate) - new Date(a.hydrationDate)
    })
    let sortedInfestation = infestation.sort(function (a, b) {
        return new Date(b.infestationDate) - new Date(a.infestationDate)
    })


    const merged = crops.map(t1 => ({ ...t1, ...sortedHydration.find(t2 => t2.cropName === t1.cropName) }))
    const chiMerged = merged.map(t1 => ({ ...t1, ...sortedInfestation.find(t2 => t2.cropName === t1.cropName) }))



    return (
        <Layout>
            <div className="container box opacityLayer">
                <div className="column">
                    <div className="hero is-centered">
                        <div className="hero-body">

                            <div className="level is-hidden-mobile">
                                <div className="level-left">
                                    <p className="title is-size-2 is-spaced">Crops</p>
                                </div>
                                <div className="level-right">
                                    <a className="button is-dark" href="/addCrop">Add Crop</a>
                                </div>
                            </div>

                            <hr className="is-hidden-mobile"></hr>

                            <section className="hero is-small">
                                {chiMerged.length === 0 ? (
                                    <CropCounter cropLength={chiMerged.length} />
                                ) : (
                                        <CropCounter cropLength={chiMerged.length} />
                                    )}
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

                            <div className="b-table has-pagination box">
                                <div className="table-wrapper has-mobile-cards">
                                    <table className="table is-fullwidth is-striped is-hoverable is-fullwidth">
                                        <thead>
                                            <tr className="has-text-centered">
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
                                            {chiMerged.map((crop, i) => (
                                                <CropTable crop={crop} key={i} />
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
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
    let cropRes = await fetch(`${server}/api/crops`)
    let hydrationRes = await fetch(`${server}/api/hydration`)
    let infestationRes = await fetch(`${server}/api/infestation`)
    let reportRes = await fetch(`${server}/api/reports`)

    // extract the data
    let cropData = await cropRes.json()
    let hydrationData = await hydrationRes.json()
    let infestationData = await infestationRes.json()
    let reportData = await reportRes.json()

    //console.log(data)

    return {
        props: {
            crops: cropData['message'],
            hydration: hydrationData['message'],
            infestation: infestationData['message'],
            reports: reportData['message']
        },
    }
}

/*

                <section className="content is-medium">

                    {status !== "authenticated" ? (
                        <div className="Hero">You must Sign In to view Crop Information</div>
                    ) : [
                            (crops.length === 0 ? (
                                <h2>No crops have been added</h2>
                            ) : (
                                    <ul>
                                        {crops.map((crop, i) => (
                                            <CropCard crop={crop} key={i} />
                                        ))}
                                    </ul>
                                )
                            )
                        ]
                    }


                </section>
*/