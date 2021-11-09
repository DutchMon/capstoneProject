/*____________Imports_________________*/

import LayoutDashboard from '../components/layoutDashboard'
import { server } from '../config'
import CropCounter from '../components/CropCounter'
import CropTable from '../components/CropTable'

import ChartsEmbedSDK from '@mongodb-js/charts-embed-dom'
import React, { useRef, useCallback, useState, useEffect } from "react"
import { useSession } from "next-auth/react"


//import HomeContent from '../components/pageContent/HomeContent'
//import { getProviders, getSession } from "next-auth/react"

/*____________________________________*/



export default function Dashboard({ crops }) {
    const [_document, set_document] = useState(null)
    const sdk = new ChartsEmbedSDK({
        baseUrl: 'https://charts.mongodb.com/charts-project-0-oamkk'
    })
    const chart = sdk.createChart({
        chartId: '103b7ec3-a8bf-455d-ad02-0e4f019905be',
        showAttribution: false,
        maxDataAge: 5
    })



    const { data: session, status } = useSession()

    console.log("Session:", session)
    console.log("Status:", status)

    useEffect(() => {
        set_document(document)

        if (typeof window === 'object') {
            chart.render(document.getElementById("chart"))
        }
    }, [])

    return (
        <LayoutDashboard>

            <div className="section">
                <hr className="is-hidden-mobile"></hr>
                <section className="hero is-small is-centered content">
                    {crops.length === 0 ? (
                        <div className="hero-body">
                            <CropCounter cropLength={crops.length} />
                        </div>
                    ) : (
                            <div>
                                <CropCounter cropLength={crops.length} />
                            </div>
                        )}
                </section>
                <hr className="is-hidden-mobile"></hr>
                <section className="hero is-centered">
                    <div className="hero-body">
                        <div className="chart-container chartStyle">
                            <div id="chart"> </div>
                        </div>
                    </div>
                </section>
                <hr className="is-hidden-mobile"></hr>
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
                                        {crops.map((crop, i) => (
                                            <CropTable crop={crop} key={i} />
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </LayoutDashboard >
    )
}

export async function getServerSideProps(ctx) {

    // request crop data from api
    let response = await fetch(`${server}/api/crops`)

    // extract the data
    let data = await response.json()
    //console.log(data)

    return {
        props: {
            crops: data['message']
        },
    }
}