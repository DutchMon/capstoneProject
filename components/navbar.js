/*      ./components/Navbar.js      */

import Image from 'next/image'
import ActiveLink from './ActiveLink'
import agIcon from '../public/agIcon.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faFileInvoice, faChartBar, faInbox, faPhotoFilm, faGears } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
    return (
        <div className="dashboard-panel is-small has-background-grey-lighter is-hidden-mobile">
            <header className="dashboard-panel-header">
                <Logo></Logo>
            </header>
            <div className="dashboard-panel-content">
                <aside className="menu">
                    <ul className="menu-list">
                        <li>
                            <ActiveLink activeClassName="is-active" href="/">
                                <span>
                                    <FontAwesomeIcon icon={faHome} className="menu-list" />
                                    Dashboard
                                </span>
                            </ActiveLink>
                        </li>
                        <li>
                            <ActiveLink activeClassName="is-active" href="/reports">
                                <span>
                                    <FontAwesomeIcon icon={faFileInvoice} className="menu-list" />
                                    Reports
                                </span>
                            </ActiveLink>
                        </li>
                        <li>
                            <ActiveLink activeClassName="is-active" href="/cropAnalytics">
                                <span>
                                    <FontAwesomeIcon icon={faChartBar} className="menu-list" />
                                    Crops
                                </span>
                            </ActiveLink>
                        </li>
                        <li>
                            <ActiveLink activeClassName="is-active" href="/inbox">
                                <span>
                                    <FontAwesomeIcon icon={faInbox} className="menu-list" />
                                    Inbox
                                </span>
                            </ActiveLink>
                        </li>
                        <li>
                            <ActiveLink activeClassName="is-active" href="/media">
                                <span>
                                    <FontAwesomeIcon icon={faPhotoFilm} className="menu-list" />
                                    Media
                                </span>
                            </ActiveLink>
                        </li>
                        <li>
                            <ActiveLink activeClassName="is-active" href="/settings">
                                <span>
                                    <FontAwesomeIcon icon={faGears} className="menu-list" />
                                    Settings
                                </span>
                            </ActiveLink>
                        </li>
                    </ul>
                </aside>
            </div>
        </div>
    )
}

// Nested Components of Dashboard
function Logo() {
    return (
        <div className="is-centered">
            <div className="logo-wrapper">
                <Image
                    src={agIcon}
                    alt="webapp logo icon image"
                />
            </div>
        </div>
    )
}
