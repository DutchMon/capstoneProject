import React from 'react'
import { signIn } from 'next-auth/react'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons'

const iconObject = {
  google: faGoogle,
  twitter: faTwitter,
  github: faGithub,
  facebook: faFacebook
}

const BtnLogin = ({ provider }) => {
  const brandName = `${provider.name.toLowerCase()}`
  return (
    <button className="button is-link is-medium" onClick={() => signIn(provider.id)}>
      <span>
        <FontAwesomeIcon icon={iconObject[brandName]} className="menu-list brandIcon" />
           {provider.name}
        </span>
    </button>
  )
}

BtnLogin.defaultProps = {
  txtColor: '#eee'
}
export default BtnLogin