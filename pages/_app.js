/*____________Imports_____________*/

//import 'bulma/css/bulma.css'
import 'bulma/bulma.sass'
import '../sass/dashboard.sass'
import '../css/dashboard.css'
import '../css/login.css'
import '../sass/mySassStyles.sass'
import '../css/cropCounter.css'
import { SWRConfig } from 'swr'

/*____________Realm App_____________*/

//import * as Realm from 'realm-web'

//const app = new Realm.App({ REACT_APP_REALM_APP_ID })



/*_____________Font Awesome Icons_______________

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false


______________________________________________*/



/*_______________Functions_______________________*/

//Main Function
function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        onError: (err) => {
          console.error(err)
        },
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  )
}

export default MyApp;