/*____________Imports_____________*/

import '../sass/my-sass-styles.sass'
import '../css/myStyles.css'
import '../sass/dashboard.sass'
import { SWRConfig } from 'swr'
import React from "react"
import { Router } from "next/router"

/*____________Realm App_____________*/

//import * as Realm from 'realm-web'

//const app = new Realm.App({ REACT_APP_REALM_APP_ID })




/*_______________Functions_______________________*/

//Main Function
function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    const start = () => {
      console.log("start");
      setLoading(true);
    };
    const end = () => {
      console.log("findished");
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
          <Component {...pageProps} />
    </>
  )
}

export default MyApp;