/*____________Imports_________________*/

import LayoutDashboard from '../components/layoutDashboard'
import HomeContent from '../components/pageContent/HomeContent'

import ChartsEmbedSDK from '@mongodb-js/charts-embed-dom'
import React, { useRef, useCallback, useState, useEffect } from "react"


//import HomeContent from '../components/pageContent/HomeContent'
//import { getProviders, getSession } from "next-auth/react"

/*____________________________________*/



export default function Dashboard() {
    const [_document, set_document] = useState(null)
    const sdk = new ChartsEmbedSDK({
        baseUrl: 'https://charts.mongodb.com/charts-project-0-oamkk'
    })
    const chart = sdk.createChart({
        chartId: '103b7ec3-a8bf-455d-ad02-0e4f019905be',
        showAttribution: false,
        maxDataAge: 5
    })

    useEffect(() => {
        set_document(document)

        if (typeof window === 'object') {
            chart.render(document.getElementById("chart"))
        }
    }, [])

    return (
        <LayoutDashboard>
            <section className="hero is-centered">
                <div className="hero-body">
                    <div className="chart-container chartStyle">
                        <div id="chart"> </div>
                    </div>
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
< section className = "section" >
    <iframe
        className="chartStyle"
        src={'https://charts.mongodb.com/charts-project-0-oamkk/embed/charts?id=103b7ec3-a8bf-455d-ad02-0e4f019905be&maxDataAge=3600'}
    />
 </section >
*/