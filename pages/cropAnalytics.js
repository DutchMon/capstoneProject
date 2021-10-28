/*____________Imports_________________*/

import Layout from '../components/layout'
import CropCard from '../components/CropCard'
import CropCounter from '../components/CropCounter'
import { server } from '../config'
import { getSession } from 'next-auth/react'

/*____________________________________*/


export default function CropAnalyticsContent({ crops }) {
    return (
        <Layout>
            <section className="section" id="noPaddingTop">

                <div className="level is-hidden-mobile">
                    <div className="level-left">
                        <p className="title is-size-2 is-spaced">Crop Analytics</p>
                    </div>
                    <div className="level-right">
                        <a className="button is-dark" href="/addCrop">Add Crop</a>
                    </div>
                </div>

                <hr className="is-hidden-mobile"></hr>

                <section className="content is-small">
                    {crops.length === 0 ? (
                        null
                    ) : (
                            <div>
                                <CropCounter cropLength={crops.length} />
                            </div>
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

                <section className="content is-medium">

                    {crops.length === 0 ? (
                        <h2>No crops have been added</h2>
                    ) : (
                            <ul>
                                {crops.map((crop, i) => (
                                    <CropCard crop={crop} key={i} />
                                ))}
                            </ul>
                        )}

                </section>




            </section>
        </Layout>
    )
}


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