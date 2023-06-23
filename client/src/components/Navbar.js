import React, { useState } from 'react'
import {Link} from "react-router-dom"

//icons
import {BiLogIn} from "react-icons/bi"
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai"

//styles
import styles from "./navbar.module.css"



export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false)

  return (
    <nav className={styles.navbar}>
        <div className={styles.navContainer}>
            {/* logo */}
        <h1>MyChoiceShop</h1>

       <div className={styles.icons}>
            {/* login and menu icon */}
            <BiLogIn />
            {!showMenu && (
                <AiOutlineMenu 
                onClick={() => setShowMenu(true)}
                />)
            }
            {showMenu && (
                <AiOutlineClose 
                onClick={() => setShowMenu(false)}
                />)
            }
       </div>

        {/* menu */}
        {showMenu && (
            <ul>
                <li>
                    <Link to="/">
                        Forside
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        Kategori #1
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        Kategori #2
                    </Link>
                </li>
            </ul>
        )}
        </div>
    </nav>
  )
}