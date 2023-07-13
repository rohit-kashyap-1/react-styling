import React from 'react'
import logo from '../assets/images/logo.png'
import styles from '../assets/css/Header.module.css'

export default function Header() {
  return (
    <header>
      <div className='container'>
            <div className={styles.Main}>
                <div className={styles.logo}>
                    <a href=''>
                        <img src={logo} />
                    </a>
                </div>
                <div className={styles.mainMenu}>
                    <a href=''>Home</a>
                    <a href=''>About Us</a>
                    <a href=''>Services</a>
                    <a href=''>Pricing</a>
                    <a href=''>Community</a>
                    <a href=''>Forum</a>
                </div>
                
            </div>
      </div>
    </header>
  )
}
