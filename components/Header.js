import React, { useState, useRef } from 'react'
import Link from 'next/link'
import useUser from '../lib/useUser'
import { useRouter } from 'next/router'

import Image from 'next/image'
import ActiveLink from './ActiveLink'
import agIcon from '../public/agIcon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faFileInvoice, faChartBar, faInbox, faPhotoFilm, faGears } from '@fortawesome/free-solid-svg-icons'

import { useOnClickOutside } from './hooks'



function Logo() {
    return (
        <div className="column" id="mobileLogo">
            <div className="mobile-logo-wrapper">
                <Image
                    src={agIcon}
                    alt="webapp logo icon image"
                />
            </div>
        </div>
    )
}

const toggleBurger = (e) => {
    let burgerIcon = document.getElementById('burger');
    let dropMenu = document.getElementById('navMenu');
    burgerIcon.classList.toggle('is-active');
    dropMenu.classList.toggle('is-active');
}

const closeBurger = (e) => {
    let burgerIcon = document.getElementById('burger');
    let dropMenu = document.getElementById('navMenu');
    burgerIcon.classList.remove('is-active');
    dropMenu.classList.remove('is-active')
}

const Header = () => {
    const { user, mutateUser } = useUser()
    const router = useRouter()
    const node = useRef();
    useOnClickOutside(node, (e) => closeBurger() )

    return (
        <>
            <nav className="navbar is-fixed-top is-dark is-hidden-mobile">
                <div className="navbar-menu">
                    <div className="navbar-end">
                        <ul className="login-list">
                            {!user?.isLoggedIn && (
                                <li>
                                    <Link href="/login">
                                        <a>Login</a>
                                    </Link>
                                </li>
                            )}
                            <li>
                                <a href="">
                                    <img src="/farmerIcon.png" width="32" height="32" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <nav className="navbar is-fixed-top is-dark is-hidden-desktop is-flex" id="mobileCenter" ref={node}>
                <div className="column is-flex"></div>
                <Logo></Logo>
                <div className="column is-flex">
                    <div className="navbar-burger burger" id="burger" onClick={toggleBurger}>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </div>
                </div>
                <div className="navbar-menu is-light has-background-grey-lighter is-hidden-desktop" id="navMenu">
                    <ul className="menu-list burgerMenu">
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
                                    Crop Analytics
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
                </div>
            </nav>
        </>
    )
}

export default Header



