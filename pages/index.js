/*____________Imports_________________*/

import LayoutDashboard from '../components/layoutDashboard'
import ChartsEmbedSDK from '@mongodb-js/charts-embed-dom'
import React, { useRef, useCallback, useState, useEffect } from "react"

//import HomeContent from '../components/pageContent/HomeContent'
//import { getProviders, getSession } from "next-auth/react"

/*____________________________________*/


const sdk = new ChartsEmbedSDK({
    baseUrl: 'https://charts.mongodb.com/charts-project-0-oamkk'
})
const chart = sdk.createChart({
    chartId: '103b7ec3-a8bf-455d-ad02-0e4f019905be',
})



export default function Dashboard() {




    return (
        <LayoutDashboard>
            <section className="hero is-centered">
                <div className="hero-body">
                    <iframe
                        className="chartStyle"
                        src={'https://charts.mongodb.com/charts-project-0-oamkk/embed/charts?id=103b7ec3-a8bf-455d-ad02-0e4f019905be&maxDataAge=3600'}
                    />
                </div>
            </section>
            <section className="section is-medium">
                <h1 className="title">Large Section for Content</h1>
                <h2 className="subtitle">Include more charts I guess....</h2>
            </section>
        </LayoutDashboard >
    )
}

/*

    const refChart = useRef(null)

    const renderChart = useCallback(async (ref) => {
        try {
            await chart.renderPage(ref)
        } catch (e) {
            console.error(e)
        }
    },[])

    const setRefChart = useCallback(
        (ref) => {
            if (ref) {
                renderChart(ref)
            }
            refChart.current = ref
        },
        [renderChart]
    )



export async function getServerSideProps(ctx) {
    // get the current environment
    let dev = process.env.NODE_ENV !== 'production'

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
*/