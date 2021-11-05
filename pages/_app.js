/*____________Imports_____________*/

import '../sass/my-sass-styles.sass'
import '../css/myStyles.css'
import '../sass/dashboard.sass'
import React from "react"
import { Router } from "next/router"
import Layout from '../components/layout'
import { SessionProvider } from "next-auth/react"
import "react-datepicker/dist/react-datepicker.css";


/*____________Realm App_____________*/

//import * as Realm from 'realm-web'

//const app = new Realm.App({ REACT_APP_REALM_APP_ID })




/*_______________Functions_______________________*/
const toggleActive = (e) => {
  let showLoader = document.getElementById('loaderToggle')
  showLoader.classList.toggle('is-active')
}


//Main Function
function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {

  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    const start = () => {
      //console.log("start");
      setLoading(true)
      toggleActive()
    }
    const end = () => {
      //console.log("findished");
      setLoading(false)
    }
    Router.events.on("routeChangeStart", start)
    Router.events.on("routeChangeComplete", end)
    Router.events.on("routeChangeError", end)
    return () => {
      Router.events.off("routeChangeStart", start)
      Router.events.off("routeChangeComplete", end)
      Router.events.off("routeChangeError", end)
    }
  }, [])


  return (
    <SessionProvider session={session}>
      {loading ? (
        <Layout>
          <div className="pageloader is-right-to-left" id="loaderToggle"><span className="title">Planting Crops</span></div>
        </Layout>
      ) : (
          <Component {...pageProps} />
        )}
    </SessionProvider>
  )
}

export default MyApp;

